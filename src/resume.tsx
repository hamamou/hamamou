import resumeData from './data.json';

const Resume = () => (
    <html>
        <head>
            <title>Resume</title>
            <link
                rel="icon"
                href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>"
            ></link>
        </head>
        <body>
            <div style={{margin: '20px', fontFamily: 'Times New Roman, sans-serif', lineHeight: '1.6'}}>
                <header style={{textAlign: 'center', marginBottom: '20px'}}>
                    <h1 style={{color: '#45818e', fontSize: '28px', marginBottom: '10px'}}>{resumeData.name}</h1>

                    <ul
                        style={{
                            listStyleType: 'none',
                            padding: '0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <li>
                            ✉️{' '}
                            <a
                                href={`mailto:${resumeData.contact.email}`}
                                style={{color: 'inherit', textDecoration: 'none'}}
                            >
                                {resumeData.contact.email}
                            </a>
                        </li>
                        <li>
                            🌐{' '}
                            <a href={resumeData.contact.linkedin} style={{color: 'inherit', textDecoration: 'none'}}>
                                LinkedIn Profile
                            </a>
                        </li>
                        <li>☎️ {resumeData.contact.phone}</li>
                        <li>📍 {resumeData.contact.location}</li>
                    </ul>
                </header>

                <section style={{marginBottom: '30px'}}>
                    <p style={{lineHeight: '1.8'}}>{resumeData.summary}</p>
                </section>

                <section style={{marginBottom: '30px'}}>
                    <h2 style={{color: '#45818e', fontSize: '20px', marginBottom: '10px'}}>
                        Senior Full Stack Developer
                    </h2>
                    <p style={{lineHeight: '1.8'}}>
                        <strong>Languages:</strong> {resumeData.languages}
                    </p>
                </section>

                <section style={{marginBottom: '30px'}}>
                    <h2 style={{color: '#45818e', fontSize: '20px', marginBottom: '10px'}}>Work Experience</h2>

                    {resumeData.experience.map((exp, index) => (
                        <article key={index} style={{marginBottom: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <a
                                    href={`#${exp.company}`}
                                    style={{color: 'inherit', textDecoration: 'none', fontSize: '20px'}}
                                >
                                    <strong>{exp.company}</strong>
                                </a>
                                <div>
                                    <em>{exp.date}</em>
                                </div>
                            </div>
                            <div>{exp.title}</div>
                            <ul style={{marginTop: '10px', marginBottom: '0'}}>
                                {exp.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </section>

                <section style={{marginBottom: '30px'}}>
                    <h2 style={{color: '#45818e', fontSize: '20px', marginBottom: '10px'}}>Education</h2>

                    {resumeData.education.map((edu, index) => (
                        <article key={index} style={{marginBottom: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <strong>{edu.degree}</strong>
                                <div>
                                    <em>{edu.date}</em>
                                </div>
                            </div>
                            <div>{edu.university}</div>
                            {typeof edu.description === 'string' ? (
                                <ul style={{marginTop: '10px', marginBottom: '0'}}>
                                    <li>{edu.description}</li>
                                </ul>
                            ) : (
                                <ul style={{marginTop: '10px', marginBottom: '0'}}>
                                    {edu.description.map((desc, idx) => (
                                        <li key={idx}>{desc}</li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    ))}
                </section>
            </div>
        </body>
    </html>
);

export default Resume;
