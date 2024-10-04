# chatbot/views.py
from django.http import JsonResponse
from django.views import View
import os
import json
from openai import AsyncOpenAI
from dotenv import load_dotenv
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
# Load environment variables from .env file
load_dotenv()

# Initialize the OpenAI client with the API key
client = AsyncOpenAI(api_key=os.getenv('OPENAI_API_KEY'))


@method_decorator(csrf_exempt, name='dispatch')
class ChatbotView(View):
    async def post(self, request):
        try:
            # Decode and parse the JSON request body
            body_unicode = request.body.decode('utf-8')
            body_data = json.loads(body_unicode)
            user_message = body_data.get("message", "").strip()

            print(f"Received message: {user_message}")

            if not user_message:
                return JsonResponse({"message": "No message provided"}, status=400)

            # Asynchronously call the OpenAI API
            chat_completion = await client.chat.completions.create(
                messages=[
                    {
                        "role": "user",
                        "content": user_message,
                    }
                ],
                model="gpt-4o-mini",
            )

            # Extract the assistant's message from the response
            bot_message = chat_completion.choices[0].message.content.strip()
            return JsonResponse({"message": bot_message}, status=200)

        except Exception as e:
            print(f"Error: {e}")
            return JsonResponse({"message": f"Error occurred: {str(e)}"}, status=500)
