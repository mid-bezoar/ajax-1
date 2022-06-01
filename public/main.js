let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.id;
        ulId.appendChild(li);
      });
      n += 1;
    }
    if (n === 3) {
      getPage.setAttribute('disabled', true);
      return;
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', '/5.json');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const json = JSON.parse(request.response);
      getName.textContent = json.name;
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/4.xml');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName('warning')[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', '/3.html');
  request.onreadystatechange = () => {
    console.log(request.readyState);
    console.log(request.status);
    if (request.readyState === 4 && request.status === 200) {
      const div = document.createElement('div');
      div.innerHTML = request.response;
      document.body.appendChild(div);
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', '/2.js');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const script = document.createElement('script');
      script.innerHTML = request.response;
      document.body.appendChild(script);
    }
  };
  request.send();
};

getCss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', '/style.css');
  // request.onload = () => {
  //   const style = document.createElement('style');
  //   style.innerHTML = request.response;
  //   document.head.appendChild(style);
  // };
  // request.onerror = () => {
  //   console.log('失败了');
  // };
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement('style');
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        console.log('请求 CSS 失败！');
      }
    }
  };
  request.send();
};
