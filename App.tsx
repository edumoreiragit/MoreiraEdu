
import React, { useState } from 'react';
import { RESUME_DATA } from './constants';
import Section from './components/Section';
import ExperienceItem from './components/ExperienceItem';
import EducationItem from './components/EducationItem';
import Modal from './components/Modal';
import { LocationIcon, PhoneIcon, MailIcon, LinkedInIcon, DocumentTextIcon, PrinterIcon } from './components/icons';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { coverLetter } = RESUME_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="font-sans text-gray-800 antialiased print:bg-white print:p-0">
      <main className="max-w-4xl mx-auto my-10 md:my-16 p-8 md:p-12 bg-white shadow-2xl rounded-lg print:shadow-none print:m-0 print:max-w-none print:p-0 print:rounded-none">
        <header className="text-center border-b-2 border-gray-100 pb-8 mb-8">
          <h1 className="text-5xl font-bold font-serif text-gray-800 tracking-tight">
            {RESUME_DATA.name}
          </h1>
          <div className="mt-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-gray-600">
            <a href="#" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
              <LocationIcon className="w-4 h-4" />
              <span>{RESUME_DATA.location}</span>
            </a>
            <a href={`tel:${RESUME_DATA.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-teal-600 transition-colors">
              <PhoneIcon className="w-4 h-4" />
              <span>{RESUME_DATA.phone}</span>
            </a>
            <a href={`mailto:${RESUME_DATA.email}`} className="flex items-center gap-2 hover:text-teal-600 transition-colors">
              <MailIcon className="w-4 h-4" />
              <span>{RESUME_DATA.email}</span>
            </a>
            <a href={RESUME_DATA.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
              <LinkedInIcon className="w-4 h-4" />
              <span>{RESUME_DATA.linkedinHandle}</span>
            </a>
          </div>
           <div className="mt-8 flex flex-wrap justify-center gap-4 print:hidden">
             <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
             >
                <DocumentTextIcon className="w-5 h-5" />
                <span>Carta de Apresentação</span>
            </button>
             <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
             >
                <PrinterIcon className="w-5 h-5" />
                <span>Salvar PDF / Imprimir</span>
            </button>
           </div>
        </header>

        <Section title="Resumo Executivo">
          <p className="text-gray-700 leading-relaxed text-justify">
            {RESUME_DATA.summary}
          </p>
          <p className="mt-4 text-gray-700 italic text-justify">
            {RESUME_DATA.passionStatement}
          </p>
        </Section>

        <Section title="Competências-Chave">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-700">
            {RESUME_DATA.keyCompetencies.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-500 font-bold mr-2">›</span> {skill}
              </li>
            ))}
          </ul>
        </Section>
        
        <Section title="Experiência Profissional">
          <div className="space-y-8">
            {RESUME_DATA.experience.map((job, index) => (
              <ExperienceItem key={index} experience={job} />
            ))}
             <p className="text-sm text-gray-600 italic mt-6">{RESUME_DATA.previousExperience}</p>
          </div>
        </Section>

        <Section title="Formação Acadêmica">
           <div className="space-y-4">
            {RESUME_DATA.education.map((edu, index) => (
              <EducationItem key={index} education={edu} />
            ))}
          </div>
        </Section>

        <Section title="Diferenciais">
           <ul className="list-disc list-inside space-y-2 text-gray-700">
            {RESUME_DATA.differentiators.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Section>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={coverLetter.title}>
         <div className="space-y-4">
            <p>{coverLetter.recipient}</p>
            {coverLetter.paragraphs.map((p, index) => <p key={index} className="text-justify">{p}</p>)}
            <p>{coverLetter.closing}</p>
            <p className="font-semibold">{coverLetter.signature}</p>
            <div className="text-sm text-gray-600 border-t pt-4 mt-4">
                {coverLetter.contacts.map((contact, index) => <p key={index}>{contact}</p>)}
            </div>
        </div>
      </Modal>

    </div>
  );
};

export default App;
