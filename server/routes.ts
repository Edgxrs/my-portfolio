import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification via Resend
      const resendApiKey = process.env.RESEND_API_KEY;
      if (resendApiKey) {
        try {
          const emailResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify({
              from: "Portfolio Contact <onboarding@resend.dev>",
              to: ["gerhards.edgars@gmail.com"],
              subject: `New Contact Form Message: ${validatedData.subject}`,
              html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>From:</strong> ${validatedData.name}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Subject:</strong> ${validatedData.subject}</p>
                <p><strong>Message:</strong></p>
                <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
              `,
            }),
          });

          if (emailResponse.ok) {
            const emailData = await emailResponse.json();
            console.log("✅ Email sent successfully via Resend:", emailData.id);
          } else {
            console.error("❌ Failed to send email via Resend:", await emailResponse.text());
          }
        } catch (emailError) {
          console.error("Error sending email:", emailError);
        }
      }
      
      res.json({ success: true, message: "Message sent successfully", id: message.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  // Get contact messages (for admin purposes if needed)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}