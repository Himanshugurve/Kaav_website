import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Recipient — change to your verified email / alias
const TO_EMAIL = 'syadav@kaav-ites.com';
const FROM_EMAIL = 'KAAV Contact <noreply@kaav-ites.com>'; // swap once domain is verified

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, message } = req.body ?? {};

  // Server-side validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name.trim()}${company ? ` — ${company.trim()}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; border-radius: 12px; overflow: hidden;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 32px 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: #ffffff;">New Contact Form Submission</h1>
            <p style="margin: 8px 0 0; color: #c4b5fd; font-size: 14px;">KAAV IT Enabling Services</p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 24px;">
            
            <!-- Sender info -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; width: 120px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 14px; font-weight: 600;">${name.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 14px;"><a href="mailto:${email}" style="color: #818cf8; text-decoration: none;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 14px;">${phone.trim()}</td>
              </tr>` : ''}
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 14px;">${company.trim()}</td>
              </tr>` : ''}
            </table>

            <!-- Message -->
            <div>
              <p style="margin: 0 0 10px; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <div style="background: #1e293b; border-left: 3px solid #4f46e5; border-radius: 6px; padding: 16px; color: #e2e8f0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message.trim()}</div>
            </div>

            <!-- CTA -->
            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${email}?subject=Re: Your enquiry to KAAV IT"
                style="display: inline-block; background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: 600;">
                Reply to ${name.trim()}
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 16px 24px; background: #0f172a; text-align: center; border-top: 1px solid #1e293b;">
            <p style="margin: 0; color: #475569; font-size: 12px;">This email was sent from the contact form at kaav-ites.com</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('[resend error]', error);
      return res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact handler]', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
