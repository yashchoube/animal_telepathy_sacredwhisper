# ✅ DUAL EMAIL SYSTEM - QUICK START

## 🎉 What's New?

Your booking form now sends **TWO emails** automatically:

### 📩 Email 1: Business Notification
- **To:** prasha@gmail.com
- **Purpose:** You get all booking details
- **Format:** Plain text with all form data

### 💌 Email 2: Customer Confirmation  
- **To:** Customer's email address
- **Purpose:** They get beautiful acknowledgment
- **Format:** Professional HTML with your custom message

**Both emails are FREE, unlimited, and automatic!**

---

## 🚀 Setup (2 Steps Only!)

### Step 1: Get Your Access Key
1. Go to: https://web3forms.com/
2. Enter: prasha@gmail.com
3. Click "Get Your Access Key"
4. Copy the key

### Step 2: Add to Your Code
1. Open **form-handler.js**
2. Line 18: Replace `YOUR_ACCESS_KEY_HERE` with your key
3. Line 27: Change sender email to `prasha@gmail.com`
4. Save and refresh!

**Done! Test it now!**

---

## 📧 Customer Email Content

When a customer books, they receive this beautiful email:

```
Subject: Your Session Booking with Bridge of Whispers — Confirmation

Dear [Customer Name],

Thank you for booking your session with Bridge of Whispers.

Your Selected Service:
[Service they chose]

I have received your request, and I want you to know that 
your beloved companion is already being held in gentle 
awareness and care.

There is something sacred about choosing to listen — truly 
listen — to an animal's spirit. It speaks of love, 
responsibility, and a bond that goes beyond words.

As the communicator for your session, I will personally 
review your details and prepare for our connection. You 
will receive a follow-up email shortly with the next 
steps and timeline.

In the meantime, take a quiet moment with your companion. 
Speak to them softly. Let them know that a loving 
conversation is on its way.

"Animals are not just part of our lives —
they are part of our soul's journey."

Thank you for trusting me with something so precious.

With warmth and reverence,
Prasha Singh
Animal Communicator
Bridge of Whispers

🌿 bridgeofwhispers.com
```

**Fully customizable!** Edit in `form-handler.js` if you want to change the wording.

---

## ⚠️ Important: Sender Email

**Line 27 in form-handler.js:**
```javascript
fromEmail: 'noreply@bridgeofwhispers.com',
```

**You MUST change this to avoid spam!**

### Best Options:

✅ **Option 1 (Recommended for now):**
```javascript
fromEmail: 'prasha@gmail.com',
```
**Why:** Gmail addresses are trusted by all email providers. Customer emails will arrive in inbox, not spam!

✅ **Option 2 (When you get a custom domain):**
```javascript
fromEmail: 'hello@bridgeofwhispers.com',
```
**Why:** Professional and branded. Best long-term solution.

❌ **Don't use:**
- `noreply@bridgeofwhispers.com` (you don't own this domain yet)
- `noreply@gmail.com` (goes to spam)
- Any email you don't actually own

---

## 🧪 Testing Checklist

1. ✅ Add your Web3Forms access key
2. ✅ Change sender email to `prasha@gmail.com`
3. ✅ Save form-handler.js
4. ✅ Refresh your website
5. ✅ Click "Book a Session"
6. ✅ Fill form with YOUR email address (for testing)
7. ✅ Submit the form
8. ✅ Check prasha@gmail.com (business notification)
9. ✅ Check YOUR email (customer confirmation)
10. ✅ Check spam folders if not in inbox

**Both emails should arrive within 2-3 minutes!**

---

## 💡 Pro Tips

### For Best Deliverability:

1. **Use prasha@gmail.com as sender** (until you get custom domain)
2. **Tell customers to check spam** on their first booking
3. **Ask them to mark "Not Spam"** — future emails will then arrive in inbox
4. **Get a custom domain** when possible (bridgeofwhispers.com)
5. **Test with multiple email providers** (Gmail, Yahoo, Outlook)

### Customer Email Will Be in Spam First Time:

This is normal! Here's why:
- It's a new sender email
- Email providers are cautious with new senders
- After customer marks "Not Spam" ONCE, all future emails arrive in inbox

**Solution:** Simply tell customers in your website:
> "Check your spam folder for the confirmation email. 
> Mark it 'Not Spam' so future confirmations arrive in your inbox!"

---

## 📊 What Happens When Customer Books

```
Customer submits form
        ↓
Web3Forms receives data
        ↓
    ┌───┴───┐
    ↓       ↓
Email 1   Email 2
    ↓       ↓
prasha@   customer@
gmail.com example.com
```

**Total time:** 1-3 minutes for both emails to arrive

---

## 🎨 Customizing Customer Email

Want to change the message? Edit the `getCustomerEmailTemplate()` function in **form-handler.js**.

You can customize:
- Header design
- Message wording
- Color scheme
- Footer text
- Website link

**It's all HTML, so you can make it look exactly how you want!**

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| "Form not configured" alert | Add access key to line 18 |
| Business email not arriving | Check spam, verify access key |
| Customer email not arriving | Change sender to prasha@gmail.com |
| Both emails in spam | Use prasha@gmail.com as sender |
| Emails delayed | Normal! Wait 2-3 minutes |

---

## 📁 Files You Need

```
bridge-of-whispers/
├── index.html          ← Your website (already updated)
├── form-handler.js     ← ADD YOUR KEY HERE
└── FORM-SETUP.md       ← Full documentation
```

---

## ✨ That's It!

**Your form now provides professional service:**
- ✅ You get notified instantly
- ✅ Customers get beautiful confirmation
- ✅ Completely free and unlimited
- ✅ Professional and trustworthy
- ✅ Separates form code from website code

**Just add your access key and you're ready to go!** 🌿
