"use client";
import { questions } from "@/constants/faqQuestions";
import { Accordion } from "flowbite-react";

export const FAQ = () => {
  return (
    <div>
      <h2 className="text-5xl pb-4">FAQ</h2>
      <p className="text-2xl pb-8">
        Odpowiedzi na najczęściej zadawane pytania.
      </p>
      <Accordion>
        {questions.map((question) => (
          <Accordion.Panel className="mb-10" key={question.id}>
            <Accordion.Title className="p-3">{question.header}</Accordion.Title>
            <Accordion.Content className="p-3 pl-6">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {question.text}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
};
