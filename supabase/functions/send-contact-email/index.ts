import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle?: string;
  companyType: "publisher" | "advertiser" | "agency" | "other";
  monthlyTraffic?: string;
  message: string;
}

const companyTypeLabels: Record<string, string> = {
  publisher: "Publisher",
  advertiser: "Advertiser",
  agency: "Agency",
  other: "Other",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const formData: ContactFormData = await req.json();

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.companyType || !formData.message) {
      throw new Error("Missing required fields");
    }

    // Recipients list
    const recipients = [
      "amit@kolorowey.com",
      "kshitiz@kolorowey.com",
      "nakul@kolorowey.com",
      "reach@kolorowey.com",
    ];

    // Build email HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e3a5f 0%, #0a1628 100%); padding: 30px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #00d4aa; margin: 0; font-size: 24px;">New Contact Form Inquiry</h1>
          <p style="color: rgba(255,255,255,0.7); margin: 10px 0 0 0;">Kolorowey AdTech Platform</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border: 1px solid #e9ecef; border-top: none;">
          <h2 style="color: #1e3a5f; margin-top: 0; font-size: 18px; border-bottom: 2px solid #00d4aa; padding-bottom: 10px;">
            Contact Details
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; color: #333;">${formData.firstName} ${formData.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #333;">
                <a href="mailto:${formData.email}" style="color: #00d4aa;">${formData.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Company:</strong></td>
              <td style="padding: 8px 0; color: #333;">${formData.company}</td>
            </tr>
            ${formData.jobTitle ? `
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Job Title:</strong></td>
              <td style="padding: 8px 0; color: #333;">${formData.jobTitle}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Company Type:</strong></td>
              <td style="padding: 8px 0; color: #333;">
                <span style="background: #00d4aa; color: #0a1628; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">
                  ${companyTypeLabels[formData.companyType] || formData.companyType}
                </span>
              </td>
            </tr>
            ${formData.monthlyTraffic ? `
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Monthly Traffic:</strong></td>
              <td style="padding: 8px 0; color: #333;">${formData.monthlyTraffic}</td>
            </tr>
            ` : ''}
          </table>
          
          <h2 style="color: #1e3a5f; margin-top: 25px; font-size: 18px; border-bottom: 2px solid #00d4aa; padding-bottom: 10px;">
            Message
          </h2>
          <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e9ecef;">
            <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
          </div>
        </div>
        
        <div style="background: #1e3a5f; padding: 20px; border-radius: 0 0 12px 12px; text-align: center;">
          <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 12px;">
            This inquiry was submitted via the Kolorowey website contact form.
          </p>
        </div>
      </div>
    `;

    // Send email using Resend API directly
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Kolorowey Contact <noreply@kolorowey.com>",
        to: recipients,
        reply_to: formData.email,
        subject: `New ${companyTypeLabels[formData.companyType]} Inquiry from ${formData.firstName} ${formData.lastName} - ${formData.company}`,
        html: emailHtml,
      }),
    });

    const emailResponse = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", emailResponse);
      throw new Error(emailResponse.message || "Failed to send email");
    }

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
