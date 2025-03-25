# How Many Bunk I Can Have?

🎓 A simple React-based web app to calculate the number of classes you can bunk while maintaining the required attendance percentage.

## Features
- 📊 Calculate your current attendance percentage.
- 🏆 Check how many classes you can bunk.
- ✅ Determine how many additional classes you need to attend.
- 🎯 Easy-to-use UI with a responsive design.
- 🌐 Backend hosted on Vercel.

## Live Demo
🔗 [Check it out here](https://how-many-bunk-i-can-have.vercel.app/)

---

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express (Hosted on Vercel)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm or yarn

### Clone the Repository
```sh
git clone https://github.com/vivekjetani/how-many-bunk-i-can-have.git
cd how-many-bunk-i-can-have
```

### Install Dependencies
Using npm:
```sh
npm install
```
Or using yarn:
```sh
yarn install
```

### Run the Development Server
```sh
npm run dev
```
Or using yarn:
```sh
yarn dev
```

Open your browser and go to: `http://localhost:3000`

---

## Usage
1. Enter the **Total Number of Lectures** conducted.
2. Enter the **Number of Lectures Attended**.
3. Set the **Required Attendance Percentage** (default is 75%).
4. Click on **Check Bunk Availability 🎯**.
5. The app will display:
   - ✅ Your current attendance percentage.
   - 📌 The number of lectures you can bunk.
   - 🏆 The number of additional lectures you need to attend if attendance is below the required percentage.

---

## API Endpoint
The app uses a backend API to perform calculations. The backend is hosted on Vercel and the endpoint is:
```
POST https://how-many-bunk-i-can-have-backend.vercel.app/calculate
```
### Request Body (JSON)
```json
{
  "total_classes": 50,
  "attended_classes": 40,
  "desired_percentage": 75
}
```
### Response (JSON)
```json
{
  "current_attendance": 80,
  "max_bunks": 6,
  "additional_classes_needed": 0
}
```

---

## Deployment
### Deploy on Vercel
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Run the deploy command:
   ```sh
   vercel
   ```
3. Follow the instructions to deploy.

---

## Author
👨‍💻 **Vivek Jetani**
- 🌐 [socials orbit](https://jetani.vercel.app/)
- 📷 [Instagram](https://www.instagram.com/mr_vicky_jetani/)
- 💼 [LinkedIn](https://www.linkedin.com/in/jet-vivek-jetani/)
- 💻 [GitHub](https://github.com/vivekjetani)

---

## License
This project is open-source and available under the [MIT License](LICENSE).
