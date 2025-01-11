export interface Education {
  name: string
  school: string
  duration: string
  period: string
  location: string
  techs: string[]
}

const education: Education[] = [
  {
    name: 'Advanced Technician Diploma in Network Administration and Management',
    school: 'Institut Polytechnique de Dakar Thomas Sankara',
    duration: '2 years',
    period: '2020 - 2022',
    location: 'Dakar, Senegal',
    techs: ['HTML/CSS', 'Python', 'Cisco systems', 'Packet Tracer'],
  },
  {
    name: 'Professional certificate of specialization in web/mobile development',
    school: 'Sonatel Academy',
    duration: '10 months',
    period: 'Jan 2023 - October 2023',
    location: 'Dakar, Senegal',
    techs: ['Angular', 'Flutter', 'UML', 'Agile project management', 'Laravel'],
  },
  {
    name: "Bachelor's degree in Network Administration and Management",
    school: 'Institut Polytechnique de Dakar Thomas Sankara',
    duration: '2 years',
    period: '2023 - 2024',
    location: 'Dakar, Senegal',
    techs: ['Windows Server', 'PfSense', 'Cisco systems'],
  },
  {
    name: 'Master in Computer Science',
    school: "Institut Supérieur d'informatique (ISI)",
    duration: '2 years',
    period: '2024 - 2026',
    location: 'Dakar, Senegal',
    techs: ['C#', 'Java', 'Python'],
  },
]

export default education
