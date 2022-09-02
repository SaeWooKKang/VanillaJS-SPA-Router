export default function Footer() {
  const $footer = document.createElement('footer'); // 요소 노드 만들고 

  const template = `
    <div>I'm footer!</div>
  `;
  
  $footer.innerHTML = template;
  
  // 이벤트 등록하고
  $footer.addEventListener('click', () => console.log('footer')); 
  
  return $footer;
}