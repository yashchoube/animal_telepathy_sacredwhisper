/**
 * Form Handler for Bridge of Whispers
 * Using Web3Forms - Free, Unlimited, Reliable
 * 
 * Sends booking emails to: prasha@gmail.com
 * 
 * Setup Instructions:
 * 1. Go to https://web3forms.com/
 * 2. Enter email: prasha@gmail.com
 * 3. Click "Get Access Key"
 * 4. Copy the access key and replace YOUR_ACCESS_KEY_HERE below
 * 5. That's it! No account needed, completely free.
 */

// ═══════════════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════════════

const FORM_CONFIG = {
  // Replace this with your Web3Forms access key
  accessKey: 'bb5c1679-499d-48c4-9e4e-cf09edf68420',
  
  // Email where bookings will be sent (business notification)
  recipientEmail: 'Prasha.singh01@gmail.com',
  
  // Web3Forms API endpoint (don't change this)
  apiEndpoint: 'https://api.web3forms.com/submit',
  
  // Auto-response configuration (customer confirmation email)
  autoResponse: {
    enabled: true,
    fromEmail: 'Prasha.singh01@gmail.com', // Change to your domain
    fromName: 'Bridge of Whispers',
    subject: 'Your Session Booking with Bridge of Whispers — Confirmation'
  }
};

// Customer confirmation email template
const getCustomerEmailTemplate = (name, service) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Georgia, 'Times New Roman', serif; line-height: 1.8; color: #2C2317; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #5C7A5C; padding-bottom: 20px; }
    .header h1 { font-size: 24px; color: #5C7A5C; margin: 0; font-weight: 400; }
    .content { font-size: 16px; }
    .content p { margin-bottom: 20px; }
    .highlight { background: #F5EFE6; padding: 20px; border-left: 3px solid #5C7A5C; margin: 30px 0; font-style: italic; }
    .quote { text-align: center; font-style: italic; color: #5C7A5C; margin: 30px 0; font-size: 17px; }
    .signature { margin-top: 40px; }
    .signature p { margin: 5px 0; }
    .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #EDE4D6; font-size: 13px; color: #9B8A7A; text-align: center; }
    .service-info { background: #F5EFE6; padding: 15px; border-radius: 8px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🌿 Bridge of Whispers</h1>
      <p style="color: #9B8A7A; margin: 10px 0 0 0; font-size: 14px;">Animal Telepathic Communication</p>
    </div>
    
    <div class="content">
      <p>Dear <strong>${name}</strong>,</p>
      
      <p>Thank you for booking your session with Bridge of Whispers.</p>
      
      <div class="service-info">
        <strong>Your Selected Service:</strong><br>
        ${service}
      </div>
      
      <p>I have received your request, and I want you to know that your beloved companion is already being held in gentle awareness and care.</p>
      
      <p>There is something sacred about choosing to listen — truly listen — to an animal's spirit. It speaks of love, responsibility, and a bond that goes beyond words.</p>
      
      <p>As the communicator for your session, I will personally review your details and prepare for our connection. <strong>You will receive a follow-up email shortly with the next steps and timeline.</strong></p>
      
      <div class="highlight">
        <p style="margin: 0;">In the meantime, take a quiet moment with your companion. Speak to them softly. Let them know that a loving conversation is on its way.</p>
      </div>
      
      <div class="quote">
        <p>"Animals are not just part of our lives —<br>they are part of our soul's journey."</p>
      </div>
      
      <p>Thank you for trusting me with something so precious.</p>
      
      <div class="signature">
        <p><strong>With warmth and reverence,</strong></p>
        <p><strong>Prasha Singh</strong><br>
        Animal Communicator<br>
        Bridge of Whispers</p>
        <p style="color: #5C7A5C; margin-top: 15px;">🌿 <a href="https://bridgeofwhispers.com" style="color: #5C7A5C;">bridgeofwhispers.com</a></p>
      </div>
    </div>
    
    <div class="footer">
      <p>If you did not make this request, please ignore this email.</p>
      <p style="margin-top: 10px;">© 2026 Bridge of Whispers · All rights reserved</p>
    </div>
  </div>
</body>
</html>
  `.trim();
};

// ═══════════════════════════════════════════════════════════
// FORM HANDLER
// ═══════════════════════════════════════════════════════════

(function() {
  // Get form elements
  const bookForm = document.getElementById('bookForm');
  const formView = document.getElementById('formView');
  const thankView = document.getElementById('thankView');
  const overlay = document.getElementById('overlay');
  const submitBtn = bookForm.querySelector('.submit-btn');
  
  // Handle form submission
  bookForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Check if access key is configured
    if (FORM_CONFIG.accessKey === 'YOUR_ACCESS_KEY_HERE') {
      alert('⚠️ Form not configured yet!\n\nPlease follow the setup instructions in form-handler.js to get your free Web3Forms access key.');
      return;
    }
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    
    try {
      // Collect form data
      const formData = new FormData(bookForm);
      
      // Get customer details for email personalization
      const customerName = formData.get('name');
      const customerEmail = formData.get('email');
      const serviceName = formData.get('service');
      
      // Add Web3Forms required fields
      formData.append('access_key', FORM_CONFIG.accessKey);
      
      // Add custom subject line for business notification
      formData.append('subject', `New Booking: ${serviceName} - ${customerName}`);
      
      // Add from name for better email display
      formData.append('from_name', 'Bridge of Whispers Website');
      
      // ═══════════════════════════════════════════════════════
      // AUTO-RESPONSE CONFIGURATION (Customer Confirmation)
      // ═══════════════════════════════════════════════════════
      
      if (FORM_CONFIG.autoResponse.enabled) {
        // Enable auto-response
        formData.append('autoresponse', 'true');
        
        // Set sender details for customer email
        formData.append('autoresponse_from', FORM_CONFIG.autoResponse.fromEmail);
        formData.append('autoresponse_from_name', FORM_CONFIG.autoResponse.fromName);
        
        // Set subject for customer email
        formData.append('autoresponse_subject', FORM_CONFIG.autoResponse.subject);
        
        // Generate personalized email content
        const customerEmailHTML = getCustomerEmailTemplate(customerName, serviceName);
        formData.append('autoresponse_message', customerEmailHTML);
        
        // Optional: Set reply-to email (customer replies will go to prasha@gmail.com)
        formData.append('autoresponse_replyto', FORM_CONFIG.recipientEmail);
      }
      
      // Send to Web3Forms
      const response = await fetch(FORM_CONFIG.apiEndpoint, {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Success! Show thank you message
        formView.classList.add('hidden');
        thankView.classList.remove('hidden');
        bookForm.reset();
        
        // Optional: Log success for debugging
        console.log('✅ Booking sent successfully!');
        console.log('📧 Business notification sent to:', FORM_CONFIG.recipientEmail);
        console.log('📧 Customer confirmation sent to:', customerEmail);
      } else {
        // API returned error
        throw new Error(result.message || 'Form submission failed');
      }
      
    } catch (error) {
      // Handle errors
      console.error('Form submission error:', error);
      
      // Show user-friendly error message
      alert(
        '❌ Something went wrong!\n\n' +
        'Your booking could not be sent. Please try again or contact us directly:\n\n' +
        '📧 Email: prasha@gmail.com\n' +
        '📱 WhatsApp: [Your WhatsApp Number]'
      );
      
    } finally {
      // Restore button state
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
  
  // ═══════════════════════════════════════════════════════════
  // MODAL CONTROLS
  // ═══════════════════════════════════════════════════════════
  
  function openModal() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    formView.classList.remove('hidden');
    thankView.classList.add('hidden');
  }
  
  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  
  // Attach modal open buttons
  document.querySelectorAll('.open-modal').forEach(function(btn) {
    btn.addEventListener('click', openModal);
  });
  
  // Close button
  document.getElementById('modalClose').addEventListener('click', closeModal);
  
  // Thank you close button
  document.getElementById('closeThank').addEventListener('click', closeModal);
  
  // Click outside to close
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });
  
  // ESC key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });
  
  // ═══════════════════════════════════════════════════════════
  // PHONE NUMBER VALIDATION (India format)
  // ═══════════════════════════════════════════════════════════
  
  const phoneInput = bookForm.querySelector('input[type="tel"]');
  phoneInput.addEventListener('input', function() {
    // Allow only digits, max 10 characters (Indian phone numbers)
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
  });
  
})();

// ═══════════════════════════════════════════════════════════
// INSTRUCTIONS FOR GETTING YOUR ACCESS KEY
// ═══════════════════════════════════════════════════════════

/**
 * STEP-BY-STEP SETUP:
 * 
 * 1. Open https://web3forms.com/ in your browser
 * 
 * 2. You'll see a simple form that says "Enter your email"
 * 
 * 3. Type: prasha@gmail.com
 * 
 * 4. Click "Get Your Access Key"
 * 
 * 5. You'll immediately see your access key (looks like: a1b2c3d4-1234-5678-abcd-1234567890ab)
 * 
 * 6. Copy that access key
 * 
 * 7. Come back to this file (form-handler.js)
 * 
 * 8. Replace YOUR_ACCESS_KEY_HERE on line 18 with your real access key
 * 
 * 9. IMPORTANT: Update the fromEmail on line 27:
 *    - Change 'noreply@bridgeofwhispers.com' to your actual domain
 *    - If you don't have a custom domain yet, use 'noreply@gmail.com' temporarily
 *    - For best results, use a real email from your domain
 * 
 * 10. Save the file
 * 
 * 11. Done! Now you get TWO emails per booking:
 *     - Business notification → prasha@gmail.com (you see all booking details)
 *     - Customer confirmation → customer's email (they get acknowledgment)
 * 
 * 
 * EXAMPLE:
 * Before: accessKey: 'YOUR_ACCESS_KEY_HERE',
 * After:  accessKey: 'a1b2c3d4-1234-5678-abcd-1234567890ab',
 * 
 * Before: fromEmail: 'noreply@bridgeofwhispers.com',
 * After:  fromEmail: 'hello@bridgeofwhispers.com',  (or noreply@yourdomain.com)
 * 
 * 
 * WHY WEB3FORMS?
 * ✓ Completely FREE (unlimited submissions)
 * ✓ No account required
 * ✓ No credit card needed
 * ✓ Very reliable (used by 100,000+ websites)
 * ✓ Instant setup (takes 30 seconds)
 * ✓ No monthly limits
 * ✓ Trusted and secure
 * ✓ Supports auto-response (customer confirmation emails)
 * 
 * 
 * HOW IT WORKS:
 * 
 * When a customer submits the booking form:
 * 
 * 1. BUSINESS EMAIL (to you):
 *    From: Bridge of Whispers Website
 *    To: prasha@gmail.com
 *    Subject: New Booking: Aura Scan for Animals - Yash Choube
 *    
 *    Contains: Service, Name, Phone, Email, Pet's Name & Questions
 * 
 * 2. CUSTOMER EMAIL (to them):
 *    From: Bridge of Whispers <noreply@bridgeofwhispers.com>
 *    To: customer@example.com
 *    Subject: Your Session Booking with Bridge of Whispers — Confirmation
 *    
 *    Contains: Beautiful HTML email with their name, selected service,
 *              and the acknowledgment message you provided
 * 
 * 
 * ABOUT THE SENDER EMAIL (noreply@bridgeofwhispers.com):
 * 
 * ⚠️ IMPORTANT: For best deliverability, use a real email address from YOUR domain.
 * 
 * OPTIONS:
 * 
 * 1. If you have a custom domain (bridgeofwhispers.com):
 *    - Use: hello@bridgeofwhispers.com
 *    - Or: contact@bridgeofwhispers.com
 *    - Or: noreply@bridgeofwhispers.com
 *    - This is BEST for avoiding spam filters
 * 
 * 2. If you don't have a custom domain yet:
 *    - Temporarily use: noreply@gmail.com
 *    - Or just use: prasha@gmail.com (works fine!)
 *    - Customers will still receive the email
 * 
 * 3. When you get a custom domain later:
 *    - Just update line 27 with your new domain email
 *    - Save and refresh - that's it!
 * 
 * 
 * CUSTOMER EMAIL TEMPLATE:
 * 
 * The email customers receive is fully customizable. It includes:
 * - Professional HTML styling
 * - Their name (personalized)
 * - Selected service
 * - Your beautiful acknowledgment message
 * - Your signature with website link
 * - Bridge of Whispers branding
 * 
 * To customize the template, edit the getCustomerEmailTemplate() function above.
 * 
 * 
 * TROUBLESHOOTING:
 * 
 * ❌ If you see "Form not configured" alert:
 *    → You haven't replaced YOUR_ACCESS_KEY_HERE yet
 *    → Go to web3forms.com and get your key
 * 
 * ❌ If business emails aren't arriving:
 *    → Check prasha@gmail.com spam/junk folder
 *    → Verify you entered prasha@gmail.com correctly on web3forms.com
 *    → Wait 1-2 minutes (sometimes delayed)
 * 
 * ❌ If customer confirmation emails aren't arriving:
 *    → Check their spam/junk folder (very common for first email)
 *    → Verify the fromEmail is a valid email address
 *    → Try using prasha@gmail.com temporarily as fromEmail
 *    → Customer emails may take 2-3 minutes to arrive
 * 
 * ❌ If emails go to spam:
 *    → Use a real email from your domain (not noreply@...)
 *    → Or use prasha@gmail.com as the fromEmail
 *    → Ask customers to check spam on first booking
 *    → After they mark it "Not Spam" once, future emails will arrive in inbox
 * 
 * ❌ If you see "Something went wrong":
 *    → Open browser console (F12) to see detailed error
 *    → Check your internet connection
 *    → Verify the access key is correct (no extra spaces)
 *    → Make sure all form fields are filled correctly
 * 
 * 
 * TESTING CHECKLIST:
 * 
 * ✅ 1. Add your access key to line 18
 * ✅ 2. Update fromEmail on line 27 (use prasha@gmail.com if unsure)
 * ✅ 3. Save this file
 * ✅ 4. Refresh your website
 * ✅ 5. Submit a test booking with YOUR email address
 * ✅ 6. Check prasha@gmail.com for business notification
 * ✅ 7. Check YOUR email for customer confirmation
 * ✅ 8. Check spam folders if emails don't arrive
 * ✅ 9. Verify both emails look correct
 * ✅ 10. Done! Your form is working perfectly!
 */








// /**
//  * Bridge of Whispers - Web3Forms Handler
//  * Sends:
//  * 1. Business notification → Prasha.singh01@gmail.com
//  * 2. Customer confirmation → Customer email
//  */

// const FORM_CONFIG = {
//   accessKey: 'bb5c1679-499d-48c4-9e4e-cf09edf68420', // Your real key

//   recipientEmail: 'Prasha.singh01@gmail.com',

//   apiEndpoint: 'https://api.web3forms.com/submit',

//   autoResponse: {
//     enabled: true,
//     fromEmail: 'Prasha.singh01@gmail.com',
//     fromName: 'Bridge of Whispers',
//     subject: 'Your Session Booking with Bridge of Whispers — Confirmation'
//   }
// };

// // Customer HTML Email Template
// function getCustomerEmailTemplate(name, service) {
//   return `
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <style>
// body { font-family: Georgia, serif; line-height: 1.8; color: #2C2317; }
// .container { max-width: 600px; margin: auto; padding: 30px; }
// .header { text-align:center; border-bottom:2px solid #5C7A5C; padding-bottom:15px; }
// .service-box { background:#F5EFE6; padding:15px; margin:20px 0; border-radius:8px; }
// .footer { margin-top:40px; font-size:13px; color:#9B8A7A; text-align:center; }
// </style>
// </head>
// <body>
// <div class="container">
//   <div class="header">
//     <h2>🌿 Bridge of Whispers</h2>
//     <p>Animal Telepathic Communication</p>
//   </div>

//   <p>Dear <strong>${name}</strong>,</p>

//   <p>Thank you for booking your session with Bridge of Whispers.</p>

//   <div class="service-box">
//     <strong>Your Selected Service:</strong><br>
//     ${service}
//   </div>

//   <p>I have received your request and will personally review your details.</p>

//   <p><strong>You will receive a follow-up email shortly with next steps.</strong></p>

//   <p>With warmth and reverence,<br>
//   <strong>Prasha Singh</strong><br>
//   Animal Communicator<br>
//   Bridge of Whispers</p>

//   <div class="footer">
//     © 2026 Bridge of Whispers · All rights reserved
//   </div>
// </div>
// </body>
// </html>
// `.trim();
// }

// (function () {
//   const bookForm = document.getElementById('bookForm');
//   const formView = document.getElementById('formView');
//   const thankView = document.getElementById('thankView');
//   const overlay = document.getElementById('overlay');
//   const submitBtn = bookForm.querySelector('.submit-btn');

//   bookForm.addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const originalText = submitBtn.textContent;
//     submitBtn.textContent = 'Sending…';
//     submitBtn.disabled = true;

//     try {
//       const formData = new FormData(bookForm);

//       const customerName = formData.get('name');
//       const customerEmail = formData.get('email');
//       const serviceName = formData.get('service');

//       // REQUIRED
//       formData.append('access_key', FORM_CONFIG.accessKey);

//       // BUSINESS EMAIL
//       formData.append('subject', `New Booking: ${serviceName} - ${customerName}`);
//       formData.append('from_name', 'Bridge of Whispers Website');

//       // CUSTOMER AUTO RESPONSE
//       if (FORM_CONFIG.autoResponse.enabled) {
//         formData.append('autoresponse', 'true');

//         formData.append('autoresponse_from', FORM_CONFIG.autoResponse.fromEmail);
//         formData.append('autoresponse_from_name', FORM_CONFIG.autoResponse.fromName);
//         formData.append('autoresponse_subject', FORM_CONFIG.autoResponse.subject);

//         const customerHTML = getCustomerEmailTemplate(customerName, serviceName);
//         formData.append('autoresponse_message', customerHTML);

//         // Plain text fallback (important for Gmail delivery)
//         formData.append('autoresponse_text',
// `Dear ${customerName},

// Thank you for booking your session with Bridge of Whispers.

// Service: ${serviceName}

// You will receive follow-up details shortly.

// With warmth,
// Prasha Singh
// Bridge of Whispers`);

//         formData.append('autoresponse_replyto', 'Prasha.singh01@gmail.com');
//       }

//       const response = await fetch(FORM_CONFIG.apiEndpoint, {
//         method: 'POST',
//         body: formData
//       });

//       const result = await response.json();

//       if (result.success) {
//         formView.classList.add('hidden');
//         thankView.classList.remove('hidden');
//         bookForm.reset();
//       } else {
//         throw new Error(result.message);
//       }

//     } catch (error) {
//       alert('Something went wrong. Please try again.');
//       console.error(error);
//     } finally {
//       submitBtn.textContent = originalText;
//       submitBtn.disabled = false;
//     }
//   });

// })();
