# NeuroTalk: AI Chat Application

NeuroTalk is an AI-driven chat application designed for dynamic and interactive user experiences. Powered by Google Generative AI, the application allows users to ask questions and receive intelligent, context-aware responses in real time. The project is built with Next.js, TypeScript, ShadCN, and Tailwind CSS, ensuring a modern, responsive, and user-friendly interface.

## Features
- Real-time AI chat functionality.
- Clean and intuitive user interface.
- Built-in support for handling errors gracefully.
- Dynamic prompt input with contextual responsiveness.

---

## Implementation Details

### Key Technologies Used
1. **Frontend Framework**: Next.js with TypeScript for type safety and efficient component-based architecture.
2. **Styling**: ShadCN and Tailwind CSS for a responsive and modern design.
3. **AI Integration**: Google Generative AI API (“Gemini” model) for intelligent and context-aware responses.
4. **Icons**: React Icons for a visually appealing interface.

### Code Structure
The project follows a modular approach:
- **Components**:
  - `Message`: Displays the introductory message.
  - `AIResponse`: Renders AI-generated responses along with user prompts.
  - `PromptInput`: Manages the user input box for submitting queries.
- **State Management**:
  - React hooks (`useState`) for managing the chat data, input prompt, and UI states.

---

## Running the Project Locally

### Steps to Run
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/neurotalk.git
   cd neurotalk
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   or, if you’re using yarn:
   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your Google Generative AI API key:
   ```env
   REACT_APP_AI_API_KEY=your-google-generative-ai-api-key
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   or, if you’re using yarn:
   ```bash
   yarn dev
   ```
   The application will be available at `http://localhost:3000`.

---