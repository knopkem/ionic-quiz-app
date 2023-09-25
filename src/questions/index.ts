const API_URL = 'https://quizapi.io/api/v1/questions';
const API_KEY = 'L9FDixpVYgod8X5Z2qMoXZqns1Lo5w1R6GpnGj54';

export interface Question {
  category: string;

  tags: [
    {
      name: string;
    },
  ];
  answers: [
    {
        [key: string] : string;
    }
  ];
  question: string;
}

export const fetchQuestions = async (category: string, difficulty: string): Promise<Question[]> => {
    if (!category || !difficulty) return [];
  try {
    const response = await fetch(`${API_URL}?apiKey=${API_KEY}&category=${category}&difficulty=${difficulty}&limit=10`);
    return response.json();
  } catch (error) {
    return [];
  }
};
