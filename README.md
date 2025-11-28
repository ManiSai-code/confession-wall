# 🤫 The Confession Wall (MERN Stack)

A Full-Stack anonymous messaging platform where users can post secrets to a public wall. Data is persisted in the cloud using MongoDB.

**🔗 Live Demo:** [https://confession-wall-manisai.onrender.com/](https://confession-wall-manisai.onrender.com/)
*(Replace with your actual Render link)*

---

## 🚀 Features
* **Cloud Persistence:** Messages are stored in **MongoDB Atlas**, so they survive server restarts.
* **Real-time Updates:** New posts appear instantly without page reloads.
* **Admin Controls:** Ability to delete specific messages via the API.
* **Cross-Origin Resource Sharing (CORS):** Secure communication between the frontend and backend.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Atlas Cloud)
* **Deployment:** Render

## ⚙️ How it Works
1.  **Frontend:** Sends a `POST` request with JSON data to the API.
2.  **Server:** Receives data, validates it, and uses **Mongoose** to save it to the database.
3.  **Database:** Assigns a unique ID (`_id`) and timestamp to the entry.
4.  **Frontend:** Fetches the updated list using a `GET` request.

---

## 💻 Run Locally

1.  **Clone the Repo**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/confession-wall.git](https://github.com/YOUR_USERNAME/confession-wall.git)
    cd confession-wall
    ```

2.  **Install Server Dependencies**
    ```bash
    npm install
    ```

3.  **Setup Database**
    * Open `server.js`
    * Replace `MONGO_URL` with your own MongoDB Connection String.

4.  **Run Server**
    ```bash
    node server.js
    ```
    * Visit `http://localhost:3000`

---
## 👨‍💻 Author
**Mani Sai**
*Full Stack Developer*
