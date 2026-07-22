import { z } from 'zod'

const FlashcardSchema = z.object({
  question: z.string().min(1, 'Flashcard question cannot be empty'),
  answer: z.string().min(1, 'Flashcard answer cannot be empty'),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional().default('medium'),
  hint: z.string().optional(),
})

const QuizOptionSchema = z.string().min(1)

const QuizSchema = z.object({
  question: z.string().min(1, 'Quiz question cannot be empty'),
  options: z
    .array(QuizOptionSchema)
    .min(2, 'Quiz must have at least 2 options')
    .max(6, 'Quiz can have at most 6 options'),
  answer: z.string().min(1, 'Quiz answer cannot be empty'),
  explanation: z.string().optional().default(''),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional().default('medium'),
})

const TrueFalseSchema = z.object({
  statement: z.string().min(1, 'Statement cannot be empty'),
  answer: z.boolean(),
  explanation: z.string().optional().default(''),
})

const FillBlankSchema = z.object({
  question: z.string().min(1).refine(
    (q) => q.includes('____') || q.includes('___'),
    'Fill in the blank must contain ____'
  ),
  answer: z.string().min(1, 'Answer cannot be empty'),
  hint: z.string().optional(),
})

const ShortQuestionSchema = z.object({
  question: z.string().min(1, 'Question cannot be empty'),
  sampleAnswer: z.string().optional().default(''),
  points: z.number().optional().default(5),
})

const KeyConceptSchema = z.object({
  term: z.string().min(1),
  definition: z.string().min(1),
  example: z.string().optional(),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional().default('medium'),
})

export const StudyDataSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  summary: z.string().min(10, 'Summary too short'),
  detailedSummary: z.string().optional().default(''),
  keyPoints: z.array(z.string().min(1)).min(1, 'At least one key point required'),
  importantDefinitions: z
    .array(
      z.object({
        term: z.string(),
        definition: z.string(),
      })
    )
    .optional()
    .default([]),
  flashcards: z.array(FlashcardSchema).min(1).max(30),
  quiz: z.array(QuizSchema).min(1).max(20),
  trueFalse: z.array(TrueFalseSchema).min(1).max(15),
  fillBlanks: z.array(FillBlankSchema).min(1).max(15),
  shortQuestions: z.array(ShortQuestionSchema).min(1).max(10),
  keyConcepts: z.array(KeyConceptSchema).optional().default([]),
  revisionNotes: z.array(z.string().min(1)).min(1),
  studyTips: z.array(z.string().min(1)).optional().default([]),
  difficultConcepts: z.array(z.string().min(1)).optional().default([]),
  examTips: z.array(z.string().min(1)).optional().default([]),
  formulaSheet: z.array(z.string()).optional().default([]),
  memoryTricks: z.array(z.string()).optional().default([]),
  faqs: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .optional()
    .default([]),
})

export const validateStudyData = (data) => {
  const result = StudyDataSchema.safeParse(data)
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`)
    throw new Error(`Validation failed:\n${errors.join('\n')}`)
  }
  return result.data
}