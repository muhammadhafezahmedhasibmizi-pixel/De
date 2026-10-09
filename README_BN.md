# দক্ষ হাত (Dokkho Haat) — Android starter project

এই ZIP-এ Android Studio-তে খোলার মতো একটি প্রাথমিক Java + WebView অ্যাপের কাঠামো আছে।

## কী আছে
- Java `MainActivity` দিয়ে Android অ্যাপ
- HTML/CSS/JavaScript UI
- স্বয়ংক্রিয় ব্যানার স্লাইড
- মিস্ত্রি সার্চ ও ক্যাটাগরি
- মিস্ত্রি প্রোফাইলের ডেমো
- স্থানীয় ডেমো মেসেজিং স্ক্রিন
- পণ্য মার্কেটপ্লেসের ডেমো
- বিক্রেতার পণ্য যোগ করার ফর্ম
- অ্যাকাউন্ট স্ক্রিন
- মোবাইল-ফ্রেন্ডলি নিচের নেভিগেশন

## চালানোর নিয়ম
1. কম্পিউটারে Android Studio ইনস্টল করুন।
2. ZIP extract করুন।
3. Android Studio → Open → `dokkho-haat-android` ফোল্ডার বেছে নিন।
4. Gradle sync শেষ হলে একটি Android emulator বা USB debugging চালু করা ফোন নির্বাচন করুন।
5. Run চাপুন।

## গুরুত্বপূর্ণ সীমাবদ্ধতা
এটি একটি starter/demo। মেসেজ, অ্যাকাউন্ট ও পণ্য এই সংস্করণে ডিভাইসের WebView-তে চলা JavaScript-এর demo data; অন্য ব্যবহারকারীর সঙ্গে অনলাইনে sync হয় না। বাস্তব অ্যাপের জন্য Supabase/Firebase বা নিজস্ব backend, authentication, database, storage, moderation এবং security rules যোগ করতে হবে। NID-এর মতো সংবেদনশীল তথ্য এই ডেমোতে সংগ্রহ করবেন না।

## ছবি
`app/src/main/assets/`-এর `index.html`, `styles.css`, `app.js` সম্পাদনা করা যায়। ব্যানারের ছবিগুলোতে demo remote image URL ব্যবহার করা হয়েছে; প্রকাশের আগে নিজের অনুমোদিত ছবি যোগ করুন।
