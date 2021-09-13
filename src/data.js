function data() {
  let retrnValue = {
    header: {
      logo: '',
      name: 'Vikas Singh',
      designation: 'Frontend developer'
    },
    social: {
      phone: '+91-9971204761',
      email: 'vikas.mca.du.2014@gmail.com',
      city: 'delhi, India',
      linkedin: 'vikas@linkein.com',
      github: 'vikas@github.com',
      twitter: 'vikas @twitter.com'
    },
    skills: {
      react: 3,
      html: 3,
      javascript: 4,
      css: 3
    },
    projects:{
      'resume-builder':'https://github.com/vikas-singh207/resume-builder',
      'facebook-clone':'https://github.com/vikas-singh207/vikas-singh207-facebook-clone'
    }
  };
  return retrnValue;
}

export default data;
