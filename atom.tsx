// atoms.tsx
import { atom } from 'jotai'

// Example Event Type from Payload CMS
export interface Event {
  id: string
  eventTitle: string
  startDate: string
  endDate: string
  eventLocation: string
  eventCategory: string
  eventDescription: string
  eventFees: number
  paymentMode: string
  eventType: string
  eventLogo: { url: string }
}

export interface Job {
  title: string
  image: string
  location: string
  startDate: string
  duration: string
  qualification: string
  ageRequirements: string
  conditionsOfService: string
  jobDescription?: string
  description?: string
  jobType?: string
  internshipType?: string
  volunteerType?: string
}

const jobData: Job[] = [
  {
    title: 'Software Developer',
    jobDescription: 'Develop and maintain web applications using JavaScript, React, and Node.js.',
    image: 'https://example.com/job-images/software-developer.jpg',
    location: 'New York, USA',
    startDate: '2024-10-01',
    jobType: 'Full-time',
    duration: 'Permanent',
    qualification: "Bachelor's degree in Computer Science or related field",
    ageRequirements: '21-35',
    conditionsOfService: 'Flexible working hours, health insurance, and paid leave',
  },
  {
    title: 'Marketing Specialist',
    jobDescription:
      'Plan and execute marketing campaigns for our products across various platforms.',
    image: 'https://example.com/job-images/marketing-specialist.jpg',
    location: 'London, UK',
    startDate: '2024-11-15',
    jobType: 'Part-time',
    duration: '6 months',
    qualification: "Bachelor's degree in Marketing or relevant field",
    ageRequirements: '25-40',
    conditionsOfService: 'Remote work option, performance bonuses',
  },
  {
    title: 'Data Analyst',
    jobDescription: 'Analyze and interpret data to assist decision-making and business strategies.',
    image: 'https://example.com/job-images/data-analyst.jpg',
    location: 'Toronto, Canada',
    startDate: '2024-09-30',
    jobType: 'Contract',
    duration: '1 year',
    qualification: "Bachelor's degree in Statistics, Data Science, or a related field",
    ageRequirements: '22-40',
    conditionsOfService: 'Flexible schedule, paid training, and travel allowances',
  },
  {
    title: 'Graphic Designer',
    jobDescription: 'Create visual designs for websites, applications, and marketing materials.',
    image: 'https://example.com/job-images/graphic-designer.jpg',
    location: 'Berlin, Germany',
    startDate: '2024-12-01',
    jobType: 'Freelance',
    duration: 'Project-based',
    qualification: 'Proven experience with design software such as Adobe Photoshop and Illustrator',
    ageRequirements: '18+',
    conditionsOfService: 'Remote work, milestone-based payment',
  },
]

const internshipData: Job[] = [
  {
    title: 'Software Developer',
    description: 'Develop and maintain web applications using JavaScript, React, and Node.js.',
    image: 'https://example.com/job-images/software-developer.jpg',
    location: 'New York, USA',
    startDate: '2024-10-01',
    internshipType: 'Full-time',
    duration: 'Permanent',
    qualification: "Bachelor's degree in Computer Science or related field",
    ageRequirements: '21-35',
    conditionsOfService: 'Flexible working hours, health insurance, and paid leave',
  },
  {
    title: 'Marketing Specialist',
    description: 'Plan and execute marketing campaigns for our products across various platforms.',
    image: 'https://example.com/job-images/marketing-specialist.jpg',
    location: 'London, UK',
    startDate: '2024-11-15',
    internshipType: 'Part-time',
    duration: '6 months',
    qualification: "Bachelor's degree in Marketing or relevant field",
    ageRequirements: '25-40',
    conditionsOfService: 'Remote work option, performance bonuses',
  },
  {
    title: 'Data Analyst',
    description: 'Analyze and interpret data to assist decision-making and business strategies.',
    image: 'https://example.com/job-images/data-analyst.jpg',
    location: 'Toronto, Canada',
    startDate: '2024-09-30',
    internshipType: 'Contract',
    duration: '1 year',
    qualification: "Bachelor's degree in Statistics, Data Science, or a related field",
    ageRequirements: '22-40',
    conditionsOfService: 'Flexible schedule, paid training, and travel allowances',
  },
  {
    title: 'Graphic Designer',
    description: 'Create visual designs for websites, applications, and marketing materials.',
    image: 'https://example.com/job-images/graphic-designer.jpg',
    location: 'Berlin, Germany',
    startDate: '2024-12-01',
    internshipType: 'Freelance',
    duration: 'Project-based',
    qualification: 'Proven experience with design software such as Adobe Photoshop and Illustrator',
    ageRequirements: '18+',
    conditionsOfService: 'Remote work, milestone-based payment',
  },
]

const volunteerData: Job[] = [
  {
    title: 'Software Developer',
    description: 'Develop and maintain web applications using JavaScript, React, and Node.js.',
    image: 'https://example.com/job-images/software-developer.jpg',
    location: 'New York, USA',
    startDate: '2024-10-01',
    volunteerType: 'Full-time',
    duration: 'Permanent',
    qualification: "Bachelor's degree in Computer Science or related field",
    ageRequirements: '21-35',
    conditionsOfService: 'Flexible working hours, health insurance, and paid leave',
  },
  {
    title: 'Marketing Specialist',
    description: 'Plan and execute marketing campaigns for our products across various platforms.',
    image: 'https://example.com/job-images/marketing-specialist.jpg',
    location: 'London, UK',
    startDate: '2024-11-15',
    volunteerType: 'Part-time',
    duration: '6 months',
    qualification: "Bachelor's degree in Marketing or relevant field",
    ageRequirements: '25-40',
    conditionsOfService: 'Remote work option, performance bonuses',
  },
  {
    title: 'Data Analyst',
    description: 'Analyze and interpret data to assist decision-making and business strategies.',
    image: 'https://example.com/job-images/data-analyst.jpg',
    location: 'Toronto, Canada',
    startDate: '2024-09-30',
    volunteerType: 'Contract',
    duration: '1 year',
    qualification: "Bachelor's degree in Statistics, Data Science, or a related field",
    ageRequirements: '22-40',
    conditionsOfService: 'Flexible schedule, paid training, and travel allowances',
  },
  {
    title: 'Graphic Designer',
    description: 'Create visual designs for websites, applications, and marketing materials.',
    image: 'https://example.com/job-images/graphic-designer.jpg',
    location: 'Berlin, Germany',
    startDate: '2024-12-01',
    volunteerType: 'Freelance',
    duration: 'Project-based',
    qualification: 'Proven experience with design software such as Adobe Photoshop and Illustrator',
    ageRequirements: '18+',
    conditionsOfService: 'Remote work, milestone-based payment',
  },
]

function atomWithSessionStorage<T>(key: string, initialValue: any) {
  const getInitialValue = (): any => {
    if (typeof window !== 'undefined') {
      // Access sessionStorage only if the window object is defined
      const storedValue = sessionStorage.getItem(key)
      return storedValue ? JSON.parse(storedValue) : initialValue
    }
    return initialValue
  }

  const baseAtom = atom<any>(getInitialValue())

  baseAtom.onMount = setAtom => {
    const callback = (event: StorageEvent) => {
      if (event.key === key) {
        setAtom(event.newValue ? JSON.parse(event.newValue) : initialValue)
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', callback)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('storage', callback)
      }
    }
  }

  return atom(
    get => get(baseAtom),
    (get, set, update: any) => {
      set(baseAtom, update)
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(key, JSON.stringify(update))
      }
    },
  )
}

export const eventListAtom = atomWithSessionStorage<Event[]>('event-list', [])
export const selectedEventAtom = atomWithSessionStorage<Event | null>('event-item', null)
export const programListAtom = atomWithSessionStorage<Event[]>('program-list', [])
export const selectedProgramAtom = atomWithSessionStorage<Event | null>('program-item', null)
export const jobListAtom = atomWithSessionStorage<Job[]>('job-list', jobData)
export const selectedJobAtom = atomWithSessionStorage<Job | null>('job-item', null)
export const internshipListAtom = atomWithSessionStorage<Job[]>('intern-list', jobData)
export const selectedInternshipAtom = atomWithSessionStorage<Job | null>('intern-item', null)
export const volunteerListAtom = atomWithSessionStorage<Job[]>('volunteer-list', jobData)
export const selectedVolunteerAtom = atomWithSessionStorage<Job | null>('volunteer-item', null)
