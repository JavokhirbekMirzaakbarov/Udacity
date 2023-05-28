import axios from 'axios';

const createEvaluationSection = (title, text) => {
  const container = document.createElement('div');
  const paragraph1 = document.createElement('span');
  const paragraph2 = document.createElement('span');

  paragraph1.innerHTML = title;
  paragraph2.innerHTML = text;

  container.appendChild(paragraph1);
  container.appendChild(paragraph2);

  return container;
};

const handleSubmit = (event) => {
  event.preventDefault();

  // check what url was put into the form field
  let url = document.getElementById('url').value;
  console.log('::: Form Submitted :::');

  document.getElementById('results').innerHTML = '';
  document.getElementById('errors').innerHTML = '';

  if (!Client.isValidURL(url)) {
    document.getElementById('errors').innerHTML = 'Enter a valid URL';
    document.getElementById('url').value = '';
  } else {
    axios
      .post(
        'http://localhost:3000/',
        { url },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((res) => {
        const results = document.getElementById('results');

        results.appendChild(
          createEvaluationSection('Sentence:', res.data.sentence_list[0].text)
        );
        results.appendChild(
          createEvaluationSection('Agreement:', res.data.agreement)
        );
        results.appendChild(
          createEvaluationSection('Subjectivity:', res.data.subjectivity)
        );
        results.appendChild(createEvaluationSection('Irony:', res.data.irony));
        results.appendChild(
          createEvaluationSection('Confidence:', res.data.confidence)
        );
        results.appendChild(
          createEvaluationSection('Score:', res.data.score_tag)
        );
      })
      .catch((error) => console.log('Error', error))
      .finally(() => (document.getElementById('url').value = ''));
  }
};

export { handleSubmit };
