// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
import { analyzeQuery } from '../../AI/utils';
import { INITIAL_GREETING } from '../../AI/data';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const userQuestion = req.body.question;

  if (!userQuestion) {
    return res.status(200).json({ answer: INITIAL_GREETING });
  }

  try {
    const analysis = analyzeQuery(userQuestion);
    
    const prompt = `
You are an AI assistant for Sioufi & Co insurance company. Answer the following question using this information:

Query Type: ${analysis.type}
${analysis.insuranceType ? `Insurance Type: ${analysis.insuranceType}` : ''}
Available Information: ${analysis.relevantInfo}

Question: ${userQuestion}

Guidelines:
1. Be professional and courteous
2. Provide specific details from the context
3. If discussing locations or contact info, list all options
4. For insurance products, highlight key features and conditions
5. If information is unclear or missing, acknowledge this and offer to help find more information

Answer:`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: prompt }],
      max_tokens: 250,
      temperature: 0.7,
    });

    return res.status(200).json({ 
      answer: completion.choices[0].message?.content || 'I apologize, but I am unable to process your request at the moment.'
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({ 
      error: 'An error occurred while processing your request. Please try again later.'
    });
  }
}