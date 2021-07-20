import './title.css';

class Title {
    create(title){
        const h1 = document.createElement('h1');

        h1.innerText = title;

        h1.classList.add('main-title');

        console.log('aga1', h1);

        document.body.appendChild(h1);

        //document.querySelector()

        //body.appendChild(h1);

        //console.log('boooody', body);
    }
}

export default Title;