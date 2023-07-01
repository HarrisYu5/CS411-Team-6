import { Configuration, OpenAIApi } from 'openai';
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Chat GPT API
const configuration = new Configuration({
  organization: //not displaying,
  apiKey: //not displaying,
});

const openai = new OpenAIApi(configuration);
const input = "";

// API route for handling client POST request
app.post("/api", async (req, res) => {
  const { message1, message2 } = req.body;
  
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Provide an outline with specific resources to learn about " + message1 + " in " + message2 + " weeks."},
    ],
  });

  const responseMessage = completion.data.choices[0].message.content;
  console.log(completion.data.choices[0].message.content);
  res.json({ responseMessage });
});

// Test route to send data to the frontend
app.get("/api", (req, res) => {
  res.json({ message: "Waiting for response" });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});