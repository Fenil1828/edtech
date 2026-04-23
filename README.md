# StudyNotion - EdTech Learning Platform

## 📋 Project Overview

**StudyNotion** is a comprehensive **EdTech (Educational Technology) platform** designed to connect instructors with students through an interactive online learning experience. The platform enables instructors to create and manage courses, while students can browse, purchase, and learn from high-quality educational content.

This is a **full-stack application** built with modern technologies, featuring real-time chat, AI-powered assistance, secure payment processing, and a responsive user interface.

---

## 🎯 Key Features

### For Students:
- ✅ Browse and explore courses by category
- ✅ Enroll in courses with secure payment (Razorpay)
- ✅ View course progress with visual indicators
- ✅ Watch video lectures with playback controls
- ✅ Rate and review courses
- ✅ Add courses to wishlist (cart)
- ✅ Track learning progress
- ✅ Access AI-powered learning assistant (Gemini AI)
- ✅ Real-time chat with instructors

### For Instructors:
- ✅ Create and manage courses
- ✅ Upload course content (videos, documents)
- ✅ Organize content into sections and subsections
- ✅ View student engagement and ratings
- ✅ Track course analytics
- ✅ Manage course pricing and categories

### General Features:
- ✅ Secure authentication (Email OTP, Google OAuth)
- ✅ Password reset functionality
- ✅ Email notifications
- ✅ Real-time chat system
- ✅ Responsive UI with Tailwind CSS
- ✅ Admin dashboard with analytics

---

## 🏗️ Tech Stack

### **Frontend** (React + Redux)
| Technology | Purpose |
|---|---|
| **React 18** | UI Library |
| **React Router v7** | Client-side routing |
| **Redux Toolkit** | State management |
| **Tailwind CSS** | Styling |
| **Axios** | HTTP client |
| **React Hook Form** | Form validation |
| **Chart.js** | Analytics & graphs |
| **Framer Motion** | Animations |
| **React Hot Toast** | Notifications |
| **React Player** | Video playback |
| **Swiper** | Carousel component |

### **Backend** (Node.js + Express)
| Technology | Purpose |
|---|---|
| **Express.js** | Server framework |
| **MongoDB** | NoSQL Database |
| **Mongoose** | MongoDB ODM |
| **JWT** | Authentication tokens |
| **Bcrypt** | Password hashing |
| **Nodemailer** | Email service |
| **Cloudinary** | Image/video storage |
| **Razorpay** | Payment gateway |
| **Passport.js** | OAuth authentication |

### **External APIs & Services**
- **Gemini AI** - AI-powered learning assistant
- **Groq API** - Alternative AI service
- **Cloudinary** - Media storage
- **Google OAuth** - Social authentication
- **Razorpay** - Payment processing
- **Nodemailer** - Email notifications

---

## 📁 Project Structure

```
StudyNotion38/
├── server/                          # Backend (Node.js + Express)
│   ├── config/                      # Configuration files
│   │   ├── database.js              # MongoDB connection
│   │   ├── cloudinary.js            # Cloudinary setup
│   │   ├── aiConfig.js              # AI services config
│   │   └── razorpay.js              # Payment config
│   ├── models/                      # MongoDB schemas
│   │   ├── User.js                  # User model
│   │   ├── Course.js                # Course model
│   │   ├── Category.js              # Category model
│   │   ├── Section.js               # Course sections
│   │   ├── SubSections.js           # Lesson/subsections
│   │   ├── Profile.js               # User profile
│   │   ├── OTP.js                   # OTP storage
│   │   ├── CourseProgress.js        # Learning progress
│   │   ├── RatingAndReview.js       # Course reviews
│   │   └── Contact.js               # Contact form submissions
│   ├── routes/                      # API endpoints
│   │   ├── User.js                  # Auth routes
│   │   ├── Profile.js               # Profile management
│   │   ├── Course.js                # Course CRUD
│   │   ├── Payment.js               # Payment processing
│   │   ├── Chat.js                  # Chat/messaging
│   │   └── Contact.js               # Contact form
│   ├── controllers/                 # Business logic
│   │   ├── Auth.js                  # Authentication
│   │   ├── Course.js                # Course operations
│   │   ├── Profile.js               # Profile operations
│   │   ├── Payments.js              # Payment handling
│   │   ├── courseProgress.js        # Progress tracking
│   │   ├── chatController.js        # Chat operations
│   │   ├── RatingandReview.js       # Reviews
│   │   └── ContactUs.js             # Contact form
│   ├── middleware/                  # Express middleware
│   │   └── auth.js                  # Authentication checks
│   ├── services/                    # External services
│   │   ├── aiRaceService.js         # AI integration
│   │   ├── geminiService.js         # Gemini AI
│   │   └── groqService.js           # Groq AI
│   ├── utils/                       # Helper utilities
│   │   ├── mailSender.js            # Email sending
│   │   ├── imageUploader.js         # Cloudinary upload
│   │   └── secToDuration.js         # Time formatting
│   ├── mail/templates/              # Email templates
│   ├── index.js                     # Server entry point
│   └── package.json                 # Backend dependencies
│
├── src/                             # Frontend (React)
│   ├── components/                  # Reusable components
│   │   ├── common/                  # Shared components
│   │   │   └── Navbar.jsx           # Navigation
│   │   └── core/                    # Feature components
│   │       ├── Auth/                # Authentication components
│   │       ├── Dashboard/           # Student/Instructor dashboard
│   │       ├── Course/              # Course components
│   │       ├── ViewCourse/          # Video player & lessons
│   │       ├── Catalog/             # Course catalog
│   │       └── HomePage/            # Home page components
│   ├── Pages/                       # Page components
│   │   ├── Home.jsx                 # Landing page
│   │   ├── Login.jsx                # Login page
│   │   ├── Signup.jsx               # Registration page
│   │   ├── Dashboard.jsx            # User dashboard
│   │   ├── Catalog.jsx              # Course catalog
│   │   ├── CourseDetails.jsx        # Course details page
│   │   ├── ViewCourse.jsx           # Video learning page
│   │   ├── About.jsx                # About page
│   │   ├── Contact.jsx              # Contact form
│   │   ├── ForgotPassword.jsx       # Password reset
│   │   └── Error.jsx                # Error page
│   ├── services/                    # API calls
│   │   ├── apiConnector.js          # Axios instance
│   │   ├── apis.js                  # API endpoints
│   │   └── operations/              # API operations
│   ├── slices/                      # Redux slices
│   │   ├── authSlice.js             # Auth state
│   │   ├── courseSlice.js           # Course state
│   │   └── cartSlice.js             # Cart state
│   ├── reducer/                     # Redux store
│   ├── data/                        # Static data
│   │   ├── navbar-links.js          # Navigation data
│   │   ├── footer-links.js          # Footer data
│   │   └── countrycode.json         # Country codes
│   ├── utils/                       # Helper utilities
│   ├── assets/                      # Images & logos
│   ├── App.js                       # Main App component
│   └── index.js                     # React entry point
│
├── build/                           # Production build
├── public/                          # Static assets
├── package.json                     # Frontend dependencies
└── README.md                        # This file
```

---

## 🔄 Complete User Journey & Data Flow

### **1. USER REGISTRATION & AUTHENTICATION FLOW**

```
┌─────────────────────────────────────────────────────────┐
│ STEP 1: SIGNUP PAGE                                     │
│ User enters: Email, Password, First Name, Last Name     │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│ STEP 2: SEND OTP                                        │
│ Backend sends OTP to user email via Nodemailer          │
│ OTP stored in MongoDB (OTP model) with 5-min expiry     │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│ STEP 3: VERIFY EMAIL                                    │
│ User enters OTP from email                              │
│ Backend validates OTP from database                     │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│ STEP 4: CREATE USER ACCOUNT                             │
│ - Password hashed with Bcrypt                           │
│ - User document saved in MongoDB                        │
│ - Profile document created                             │
│ - User assigned role (Student/Instructor)              │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│ STEP 5: LOGIN & TOKEN GENERATION                        │
│ Backend generates JWT token                             │
│ Token stored in httpOnly cookie + localStorage          │
│ User redirected to dashboard                            │
└─────────────────────────────────────────────────────────┘
```

**Alternative: Google OAuth Flow**
```
User clicks "Sign in with Google" 
    → Google authentication popup
    → Google returns user data
    → Backend finds/creates user
    → JWT token generated
    → User logged in
```

---

### **2. STUDENT COURSE BROWSING & ENROLLMENT FLOW**

```
┌──────────────────────────────────┐
│ HOME PAGE                        │
│ - Featured courses               │
│ - Course categories              │
│ - Search functionality           │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│ CATALOG PAGE                     │
│ Browse courses by category       │
│ Filter by: Rating, Price, Rating │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│ COURSE DETAILS PAGE              │
│ - Course description             │
│ - Instructor info                │
│ - Student reviews & ratings      │
│ - Price & enroll button          │
└────────────┬─────────────────────┘
             │
         ┌───┴───┐
         │       │
         ▼       ▼
    [Add to]   [Enroll Now]
    [Cart]     (Payment)
         │       │
         └───┬───┘
             │
             ▼
┌──────────────────────────────────┐
│ PAYMENT GATEWAY (Razorpay)       │
│ - Create order                   │
│ - Redirect to Razorpay           │
│ - Payment verification           │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│ ENROLLMENT SUCCESSFUL            │
│ - Add course to enrolledCourses  │
│ - Initialize progress tracking   │
│ - Send confirmation email        │
└──────────────────────────────────┘
```

---

### **3. STUDENT LEARNING & PROGRESS TRACKING FLOW**

```
┌──────────────────────────────────┐
│ DASHBOARD (After Login)          │
│ - Enrolled courses               │
│ - Course progress bars           │
│ - Wishlist/Cart items            │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│ SELECT ENROLLED COURSE           │
│ - View course sections           │
│ - View available lectures        │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│ VIDEO LEARNING PAGE              │
│ - Video player (React Player)    │
│ - Course content                 │
│ - Progress indicator             │
│ - Mark complete button           │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│ TRACK PROGRESS IN DB             │
│ - Update CourseProgress model    │
│ - Record completed subsections   │
│ - Calculate completion %         │
└──────────────────────────────────┘
```

---

### **4. INSTRUCTOR COURSE CREATION FLOW**

```
┌─────────────────────────────────────────┐
│ INSTRUCTOR DASHBOARD                    │
│ - Add New Course button                 │
│ - View existing courses                 │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│ STEP 1: CREATE COURSE BASICS            │
│ - Course name, description              │
│ - Select category                       │
│ - Upload course thumbnail               │
│ (Uploaded to Cloudinary)                │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│ STEP 2: ADD COURSE SECTIONS             │
│ - Create sections (e.g., "Basics")      │
│ - Add subsections to each section       │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│ STEP 3: UPLOAD LESSON CONTENT           │
│ - Upload video files (to Cloudinary)    │
│ - Add lesson descriptions               │
│ - Set video duration automatically      │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│ STEP 4: PUBLISH COURSE                  │
│ - Set pricing                           │
│ - Make course public/private            │
│ - Course available for students         │
└─────────────────────────────────────────┘
```

---

### **5. COURSE REVIEW & RATING FLOW**

```
┌──────────────────────────────────┐
│ STUDENT COMPLETES COURSE         │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│ RATING & REVIEW MODAL            │
│ - Star rating (1-5)              │
│ - Written review                 │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│ SAVE TO DATABASE                 │
│ - RatingAndReview model created  │
│ - Linked to course & student     │
│ - Displayed on course page       │
└──────────────────────────────────┘
```

---

### **6. AI-POWERED LEARNING ASSISTANT FLOW**

```
┌──────────────────────────────────┐
│ STUDENT IN LEARNING PAGE         │
│ - Clicks "Ask AI Assistant"      │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│ SEND QUESTION TO AI SERVICE      │
│ - Include course context         │
│ - Prepare question               │
└────────────┬─────────────────────┘
             │
     ┌───────┴────────┐
     │                │
     ▼                ▼
┌──────────────┐  ┌──────────────┐
│ Gemini AI    │  │ Groq API     │
│ (Primary)    │  │ (Fallback)   │
└──────┬───────┘  └──────┬───────┘
       │                │
       └────────┬───────┘
                ▼
       ┌──────────────────┐
       │ GET AI RESPONSE  │
       │ Stream to UI     │
       └──────────────────┘
```

---

### **7. REAL-TIME CHAT FLOW**

```
┌──────────────────────────────────┐
│ USER INITIATES CHAT              │
│ - Click on instructor/student    │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│ MESSAGE SUBMISSION               │
│ - Type message                   │
│ - Send via socket/HTTP           │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│ SAVE TO DATABASE                 │
│ - Store in Chat model            │
│ - Link sender & receiver         │
│ - Store timestamp                │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│ REAL-TIME UPDATE                 │
│ - Emit to recipient              │
│ - Update UI                      │
│ - Mark as read                   │
└──────────────────────────────────┘
```

---

## 🗄️ Database Schema Overview

### **User Model**
```javascript
{
  firstName, lastName, email, password (hashed),
  accountType (Student/Instructor),
  image (Cloudinary URL),
  courses (array of course IDs),
  courseContent (for instructors - courses created),
  additionalDetails (reference to Profile),
  createdAt, updatedAt
}
```

### **Course Model**
```javascript
{
  courseName, courseDescription, instructor (User ID),
  whatYouWillLearn (array),
  courseContent (Section IDs),
  ratingAndReviews (Review IDs),
  price, category (Category ID),
  thumbnail (Cloudinary URL),
  tag (tech stack),
  studentsEnrolled (array of User IDs),
  createdAt, updatedAt
}
```

### **Section Model**
```javascript
{
  sectionName,
  course (Course ID),
  subSection (SubSection IDs array),
  createdAt, updatedAt
}
```

### **SubSection Model**
```javascript
{
  title, timeDuration, description,
  videoUrl (Cloudinary URL),
  section (Section ID),
  createdAt, updatedAt
}
```

### **CourseProgress Model**
```javascript
{
  courseID (Course ID),
  userID (User ID),
  completedVideos (array of completed SubSection IDs),
  createdAt, updatedAt
}
```

### **RatingAndReview Model**
```javascript
{
  rating (1-5),
  review (text),
  user (User ID),
  course (Course ID),
  createdAt, updatedAt
}
```

---

## 🔌 API Endpoints

### **Authentication (User Routes)**
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/auth/signup` | User registration |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/sendOTP` | Send OTP to email |
| POST | `/api/auth/changePassword` | Change password |
| POST | `/api/auth/resetPassword` | Reset forgotten password |
| POST | `/api/auth/logout` | User logout |

### **Profile Management (Profile Routes)**
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/profile/getUserDetails` | Get user profile |
| PUT | `/api/profile/updateProfile` | Update profile info |
| PUT | `/api/profile/changeProfilePicture` | Upload new profile pic |
| DELETE | `/api/profile/deleteAccount` | Delete user account |

### **Courses (Course Routes)**
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/course/getAllCourses` | Get all courses |
| GET | `/api/course/getCourseDetails` | Get specific course |
| GET | `/api/course/getInstructorCourses` | Get instructor's courses |
| POST | `/api/course/createCourse` | Create new course |
| PUT | `/api/course/editCourse` | Edit course details |
| DELETE | `/api/course/deleteCourse` | Delete course |
| POST | `/api/course/addSection` | Add section to course |
| PUT | `/api/course/updateSection` | Edit section |
| DELETE | `/api/course/deleteSection` | Delete section |
| POST | `/api/course/addSubSection` | Add lesson/video |
| PUT | `/api/course/updateSubSection` | Edit lesson |
| DELETE | `/api/course/deleteSubSection` | Delete lesson |

### **Payments (Payment Routes)**
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/payment/capturePayment` | Initiate payment |
| POST | `/api/payment/verifyPayment` | Verify payment success |
| GET | `/api/payment/courseEnrollmentDetails` | Get enrollment data |

### **Course Progress (Course Routes)**
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/course/getProgressStats` | Get progress percentage |
| PUT | `/api/course/updateCourseProgress` | Mark video as complete |

### **Ratings & Reviews (Course Routes)**
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/course/createRating` | Submit review |
| GET | `/api/course/getCourseReviews` | Get all reviews |

### **Chat (Chat Routes)**
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/chat/getMessages` | Get chat history |
| POST | `/api/chat/sendMessage` | Send message |
| GET | `/api/chat/getChatList` | Get all conversations |

### **Contact Form (Contact Routes)**
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/contact/contactUsEmail` | Submit contact form |

---

## 🔐 Authentication & Security

### **JWT Implementation**
```javascript
// Token Structure
{
  id: "user_id",
  email: "user@email.com",
  accountType: "Student/Instructor"
}

// Token stored in:
// 1. httpOnly cookie (secure)
// 2. localStorage (frontend)

// Token used in every API request header:
// Authorization: "Bearer <jwt_token>"
```

### **Middleware Protection**
```javascript
// Auth Middleware checks:
✓ Token exists
✓ Token is valid
✓ Token not expired
✓ User exists in database

// Role-based access:
✓ Student can access student routes
✓ Instructor can access instructor routes
✓ Admin has full access
```

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js v14+
- MongoDB Atlas account
- Cloudinary account
- Razorpay account
- Google OAuth credentials
- Gemini AI API key

### **Installation - Backend**

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file with:
DATABASE_URL=mongodb+srv://...
JWT_SECRET=your_secret_key
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password
MAIL_HOST=your_mail_host
MAIL_PORT=your_mail_port
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_secret
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
GEMINI_API_KEY=your_gemini_key
GROQ_API_KEY=your_groq_key
CLIENT_URL=http://localhost:3000
PORT=4000

# Start server
npm run dev  # Development with nodemon
npm start   # Production
```

### **Installation - Frontend**

```bash
# Navigate to root directory
cd ../

# Install dependencies
npm install

# Create .env file with:
REACT_APP_API_BASE_URL=http://localhost:4000/api
REACT_APP_BASE_URL=http://localhost:4000

# Start frontend
npm start   # Runs on http://localhost:3000
```

---

## 📊 Frontend Routes & Pages

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Landing page |
| `/login` | Login | User login |
| `/signup` | Signup | New user registration |
| `/verify-email` | Email Verification | Verify OTP |
| `/forgot-password` | Forgot Password | Password reset request |
| `/update-password/:token` | Update Password | Set new password |
| `/about` | About | About page |
| `/contact` | Contact | Contact form |
| `/catalog/:catalogName` | Catalog | Browse courses by category |
| `/courses/:courseId` | Course Details | Full course info |
| `/dashboard` | Dashboard | User dashboard |
| `/dashboard/my-profile` | My Profile | Edit profile |
| `/dashboard/settings` | Settings | Account settings |
| `/dashboard/enrolled-courses` | Enrolled Courses | Student's courses |
| `/dashboard/cart` | Cart | Shopping cart |
| `/dashboard/add-course` | Add Course | Create course (Instructor) |
| `/dashboard/my-courses` | My Courses | Instructor's courses |
| `/dashboard/edit-course/:courseId` | Edit Course | Edit course details |
| `/view-course/:courseId` | View Course | Watch course videos |
| `/view-course/:courseId/section/:sectionId/sub-section/:subSectionId` | Video Lesson | Watch specific lesson |
| `/error` | Error | Error page |

---

## 🔄 Complete Application Flow Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    STUDY NOTION FLOW                    │
└─────────────────────────────────────────────────────────┘

ENTRY POINT → Landing Page (Home)
    │
    ├─→ [GUEST USER]
    │   ├─ Browse courses in Catalog
    │   ├─ View course details
    │   └─ Redirected to Login/Signup
    │
    └─→ [REGISTERED USER]
        │
        ├─→ [STUDENT]
        │   ├─ Browse & search courses
        │   ├─ View course details & reviews
        │   ├─ Add courses to cart
        │   ├─ Make payment (Razorpay)
        │   ├─ Enroll in courses
        │   ├─ Access dashboard
        │   │   ├─ View enrolled courses
        │   │   ├─ Watch videos & track progress
        │   │   ├─ Rate & review courses
        │   │   ├─ Use AI learning assistant
        │   │   ├─ Chat with instructors
        │   │   └─ Manage profile
        │   └─ Wishlist management
        │
        └─→ [INSTRUCTOR]
            ├─ Create new courses
            ├─ Upload course content (videos/docs)
            ├─ Organize sections & lessons
            ├─ View course analytics
            ├─ Manage student enrollments
            ├─ View ratings & reviews
            ├─ Chat with students
            └─ Track earnings
```

---

## 🛠️ Key Technologies in Use

### **State Management (Redux)**
- **authSlice**: User authentication state
- **courseSlice**: Course and enrollment data
- **cartSlice**: Shopping cart items
- **profileSlice**: User profile information

### **API Communication**
- **apiConnector.js**: Axios instance with token injection
- **apis.js**: Central API endpoint definitions
- **operations/**: Async thunks for API calls

### **File Upload & Storage**
- **Cloudinary Integration**: 
  - Course thumbnails
  - Lesson videos
  - Profile pictures
  - Student assignments

### **Email Notifications**
- OTP verification emails
- Payment confirmation emails
- Course enrollment emails
- Password reset emails
- Contact form responses

---

## 📈 Performance Features

✅ **Code Splitting**: React Router lazy loading  
✅ **Image Optimization**: Cloudinary responsive images  
✅ **Caching**: JWT tokens in localStorage  
✅ **Compression**: gzip compression enabled  
✅ **CDN**: Vercel deployment with global CDN  
✅ **Database Indexing**: MongoDB indexes on frequently queried fields  

---

## 🚢 Deployment

### **Frontend Deployment (Vercel)**
```bash
# Automatic deployment on git push
# Build command: npm run build
# Start command: npm start
# Environment variables configured in Vercel dashboard
```

### **Backend Deployment**
- Platform: Vercel / Railway / Render
- Database: MongoDB Atlas
- Storage: Cloudinary
- Environment: Node.js 18+

---

## 📱 Responsive Design

- **Mobile First** approach using Tailwind CSS
- **Breakpoints**: xs, sm, md, lg, xl, 2xl
- **Animations**: Framer Motion for smooth transitions
- **Touch Optimized**: Responsive buttons and navigation

---

## 🐛 Error Handling

```javascript
// Frontend
- React Error Boundary for component errors
- Global error notifications with React Hot Toast
- Validation errors from form submission

// Backend
- Try-catch blocks in controllers
- Express error middleware
- Proper HTTP status codes
- Detailed error messages to frontend
```

---

## 📝 Environment Variables Reference

### **Backend (.env)**
```
DATABASE_URL
JWT_SECRET
MAIL_USER
MAIL_PASS
MAIL_HOST
MAIL_PORT
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET
GEMINI_API_KEY
GROQ_API_KEY
CLIENT_URL
PORT
```

### **Frontend (.env)**
```
REACT_APP_API_BASE_URL
REACT_APP_BASE_URL
```

---

## 🎓 Learning Resources Used

- **MongoDB**: NoSQL database for scalability
- **Express.js**: Minimal, flexible Node.js framework
- **React**: Component-based UI library
- **Redux Toolkit**: Modern state management
- **Tailwind CSS**: Utility-first CSS framework
- **JWT**: Stateless authentication
- **OAuth 2.0**: Social authentication

---

## 📞 Support & Contact

- **Email**: Contact via Contact Us page
- **Issues**: Check GitHub issues
- **Documentation**: See deployment guides in root

---

## 📄 License

This project is private and for educational purposes.

---

## 🎯 Future Enhancements

- 📊 Advanced analytics dashboard
- 🎥 Live streaming classes
- 📱 Mobile app (React Native)
- 🌍 Multi-language support
- 🎁 Discount & coupon system
- 📜 Certificate generation
- 🔄 Discussion forums
- 📲 Push notifications

---

**Last Updated**: April 2026  
**Version**: 1.0.0

---

## Quick Navigation

- [Project Structure](#-project-structure)
- [User Journey](#-complete-user-journey--data-flow)
- [Database Schema](#-database-schema-overview)
- [API Endpoints](#-api-endpoints)
- [Getting Started](#-getting-started)
- [Tech Stack](#-tech-stack)

---

**Ready to present! This README covers your entire application architecture, data flow, and technical implementation.** 🚀