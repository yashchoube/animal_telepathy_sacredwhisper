# 📧 Form Setup Guide - Bridge of Whispers

## ✅ QUICK SETUP (Takes 2 Minutes!)

Your form is configured to send **TWO emails** per booking:
1. **Business notification** → prasha@gmail.com (you get all booking details)
2. **Customer confirmation** → customer's email (they get beautiful acknowledgment)

**Both emails are FREE, unlimited, and reliable!** 🎉

---

## 🚀 Step-by-Step Setup

### **Step 1: Get Your Free Access Key**

1. Open this website: **https://web3forms.com/**

2. You'll see a simple form that says **"Enter your email"**

3. Type: **prasha@gmail.com**

4. Click the **"Get Your Access Key"** button

5. You'll immediately see your **access key** (it looks like this):
   ```
   a1b2c3d4-1234-5678-abcd-1234567890ab
   ```

6. **Copy that access key** (Ctrl+C or Cmd+C)

---

### **Step 2: Add the Key to Your Website**

1. Open the file: **form-handler.js**

2. Find this line (around line 18):
   ```javascript
   accessKey: 'YOUR_ACCESS_KEY_HERE',
   ```

3. Replace `YOUR_ACCESS_KEY_HERE` with your real access key:
   ```javascript
   accessKey: 'a1b2c3d4-1234-5678-abcd-1234567890ab',
   ```

4. **IMPORTANT:** Update the sender email (line 27):
   ```javascript
   fromEmail: 'noreply@bridgeofwhispers.com',
   ```
   
   **Options:**
   - ✅ **Best:** Use your custom domain email (e.g., `hello@bridgeofwhispers.com`)
   - ✅ **Good:** Use `prasha@gmail.com` (works perfectly!)
   - ⚠️ **Temporary:** Use `noreply@gmail.com` (may go to spam)

5. **Save the file**

6. **Refresh your website** in the browser

---

### **Step 3: Test It!**

1. Click **"Book a Session"** on your website

2. Fill in the form with **YOUR email address** (for testing)

3. Click **"Send to Bridge of Whispers"**

4. You should see the **"Thank You"** message

5. **Check TWO inboxes:**
   - ✅ **prasha@gmail.com** — Business notification (booking details)
   - ✅ **YOUR email** — Customer confirmation (beautiful acknowledgment)

6. **Check spam folders** if emails don't arrive immediately!

7. Wait 2-3 minutes (sometimes there's a slight delay)

---

## ✅ That's It! Your Form Sends TWO Emails Now!

---

## 📧 What Both Emails Look Like

### **Email 1: Business Notification (to prasha@gmail.com)**

```
From: Bridge of Whispers Website
To: prasha@gmail.com
Subject: New Booking: Aura Scan for Animals - Yash Choube

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Service: Aura Scan for Animals (₹1,000)

Name: Yash Choube

Phone: 8998999899

Email: yashchoube@gmail.com

Pet's Name & Questions:
My cat Luna has been very anxious lately...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### **Email 2: Customer Confirmation (to customer's email)**

```
From: Bridge of Whispers <noreply@bridgeofwhispers.com>
To: yashchoube@gmail.com
Subject: Your Session Booking with Bridge of Whispers — Confirmation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Beautiful HTML email with your branding]

Dear Yash Choube,

Thank you for booking your session with Bridge of Whispers.

Your Selected Service:
Aura Scan for Animals (₹1,000)

I have received your request, and I want you to know that 
your beloved companion is already being held in gentle 
awareness and care.

There is something sacred about choosing to listen — truly 
listen — to an animal's spirit. It speaks of love, 
responsibility, and a bond that goes beyond words.

[...continues with your full acknowledgment message...]

With warmth and reverence,
Prasha Singh
Animal Communicator
Bridge of Whispers

🌿 bridgeofwhispers.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**The customer email is beautifully formatted HTML with:**
- Professional styling
- Personalized with their name
- Shows selected service
- Your complete acknowledgment message
- Bridge of Whispers branding
- Footer with website link

---

## 🎯 Why Web3Forms?

- ✅ **100% FREE** (unlimited submissions forever)
- ✅ **No account needed** (just get the key and you're done)
- ✅ **No credit card required**
- ✅ **Very reliable** (used by 100,000+ websites)
- ✅ **30-second setup**
- ✅ **Trusted and secure**
- ✅ **No monthly limits**
- ✅ **Works perfectly on localhost and live websites**

---

## ❓ Troubleshooting

### **❌ I see "Form not configured" alert**

**Problem:** You haven't replaced `YOUR_ACCESS_KEY_HERE` yet

**Solution:**
1. Go to https://web3forms.com/
2. Get your access key
3. Replace `YOUR_ACCESS_KEY_HERE` in `form-handler.js` line 18
4. Save the file
5. Refresh browser

---

### **❌ Business emails (to prasha@gmail.com) are not arriving**

**Check these:**
1. ✅ Did you check your **spam/junk folder**?
2. ✅ Did you enter **prasha@gmail.com** correctly on web3forms.com?
3. ✅ Did you wait 1-2 minutes? (sometimes delayed)
4. ✅ Did you save `form-handler.js` after adding the key?
5. ✅ Try sending another test booking

---

### **❌ Customer confirmation emails are not arriving**

**This is very common for the first email! Check these:**

1. ✅ **Check customer's spam/junk folder** (90% of the time it's here!)

2. ✅ **Wait 2-3 minutes** (customer emails take slightly longer than business emails)

3. ✅ **Update the sender email** in `form-handler.js` line 27:
   - Try using: `fromEmail: 'prasha@gmail.com',` (works reliably!)
   - Or use your custom domain email if you have one

4. ✅ **Test with YOUR email** address to see if it works

5. ✅ **Mark as "Not Spam"** — After customer marks the first email as "Not Spam", 
   all future emails will arrive in their inbox automatically!

**Pro Tip:** Tell customers to check spam folder on their first booking. After they 
mark it "Not Spam" once, they'll always receive future confirmations in their inbox.

---

### **❌ Customer emails go to spam every time**

**Solution:** Change the sender email to a more trusted one:

**Option 1** (Best for now):
```javascript
fromEmail: 'prasha@gmail.com',
```
This will work perfectly and avoid spam!

**Option 2** (Best long-term):
Get a custom domain (bridgeofwhispers.com) and use:
```javascript
fromEmail: 'hello@bridgeofwhispers.com',
```

**Why?** Gmail.com addresses are very trusted by spam filters. Using `prasha@gmail.com` 
as the sender will ensure high deliverability until you get a custom domain.

---

### **❌ I see "Something went wrong" error**

**Solution:**
1. Open browser console (press **F12**)
2. Click on **"Console"** tab
3. Look for error messages (usually shown in red)
4. Common issues:
   - Wrong access key (check for typos or extra spaces)
   - No internet connection
   - Browser blocking the request (try a different browser)

---

### **❌ How do I verify it's working?**

**Test checklist:**
- [ ] Form opens when I click "Book a Session"
- [ ] I can fill in all fields
- [ ] When I click submit, button shows "Sending…"
- [ ] I see "Thank You, Dear Soul" message
- [ ] Email arrives in prasha@gmail.com inbox (check spam!)

---

## 🔄 Alternative Options (if you want to switch)

### **Option 1: Formspree** (What you were using before)
- Free tier: 50 submissions/month
- Requires account signup
- Very popular and reliable
- Website: https://formspree.io/

### **Option 2: EmailJS**
- Free tier: 200 emails/month
- Requires account signup
- Good for complex setups
- Website: https://www.emailjs.com/

**But Web3Forms is simpler and unlimited!** 🎉

---

## 📁 Files in Your Project

```
bridge-of-whispers/
├── index.html          ← Your main website
├── form-handler.js     ← Form code (ADD YOUR KEY HERE)
├── HOW-TO-RUN.md       ← How to run locally
└── FORM-SETUP.md       ← This file
```

---

## 🎓 Technical Details (For Developers)

**How it works:**
1. User fills form on website
2. JavaScript in `form-handler.js` collects form data
3. Data is sent to Web3Forms API via POST request
4. Web3Forms forwards the email to prasha@gmail.com
5. User sees "Thank You" message
6. Prasha receives booking email

**Security:**
- All data is sent over HTTPS (encrypted)
- Web3Forms doesn't store sensitive data
- No database needed on your end
- Works on any hosting (GitHub Pages, Netlify, Vercel, etc.)

**Customization:**
- Email subject line: Line 58 in `form-handler.js`
- Recipient email: Line 24 in `form-handler.js`
- Error messages: Lines 70-77 in `form-handler.js`
- Success message: Already in your `index.html` (the Thank You modal)

---

## 💡 Pro Tips

1. **Add to bookmarks:** Save https://web3forms.com/ in case you lose your key

2. **Backup your key:** Save it somewhere safe (not just in the code)

3. **Test regularly:** Send yourself a test booking once a month

4. **Mobile testing:** Test the form on your phone too!

5. **Email rules:** Create a Gmail filter to label these emails automatically:
   - Search: `from:Bridge of Whispers Website`
   - Apply label: "Website Bookings"
   - Mark as important

---

## 🆘 Need Help?

If you're still stuck after following this guide:

1. Open browser console (F12 → Console tab)
2. Take a screenshot of any error messages
3. Check that you followed every step exactly
4. Try a different browser (Chrome, Firefox, Safari)
5. Clear browser cache and refresh (Ctrl+Shift+R)

**Most issues are solved by:**
- ✅ Adding the correct access key
- ✅ Saving the file properly
- ✅ Refreshing the browser
- ✅ Checking spam folder for emails

---

**🌿 You're all set! Your form will now send FREE, unlimited emails to prasha@gmail.com!**
