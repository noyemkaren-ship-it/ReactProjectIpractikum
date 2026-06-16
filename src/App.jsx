import { useState } from 'react';

function App() {
  const information = [
    {
      title: "Что такое React и зачем он нужен?",
      description: "Простыми словами — что такое React",
      gaid: "Гайд по React для новичков",
      info: "Представь, что ты строишь дом из Lego. React — это огромная коробка с готовыми деталями (компонентами). Вместо того чтобы каждый раз рисовать кнопку или меню с нуля, ты берёшь готовый кусочек и вставляешь его куда нужно. Каждый компонент можно использовать много раз. React очень быстрый, потому что он не перерисовывает всю страницу целиком, а обновляет только те части, которые действительно изменились.",
      code: "import React from 'react';\n\nfunction MyComponent() {\n  return <>\n    <h1>Привет, мир!</h1>\n  </>;\n}\n\nexport default MyComponent;",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsp2k_Iz5oUYFcBO_UtfbAxio6b6mYs_XHQ&s"
    },
    {
      title: "Как создать свой первый React проект?",
      description: "Делаем первый проект шаг за шагом",
      gaid: "Гайд по созданию React проекта",
      info: "Представь, что ты хочешь построить дом. Вместо того чтобы копать фундамент вручную, ты используешь готовый строительный набор. Одна команда в терминале создаёт тебе полностью готовый проект со всей необходимой настройкой. После создания перейди в папку проекта и запусти его командой `npm start` (или `npm run dev`).",
      code: "npx create-react-app my-app",
      image: "https://i.ytimg.com/vi/1jVxMHK6JJI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBiM9gFUYZlHGb1-OvVTQKMbyaXRg"
    },
    {
      title: "Что такое JSX?",
      description: "Как писать HTML внутри JavaScript",
      gaid: "Гайд по JSX",
      info: "JSX — это смесь JavaScript и HTML. Благодаря ему ты можешь писать разметку прямо внутри JavaScript-файла. React потом превращает этот код в настоящий HTML. Главное правило: возвращать можно только один родительский элемент (или использовать <> </> — пустой фрагмент).",
      code: "function App() {\n  return (\n    <>\n      <h1>Заголовок</h1>\n      <p>Это параграф</p>\n    </>\n  );\n}",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQGZOlvNckIdXw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1671861031037?e=2147483647&v=beta&t=n6ieyEkMRRIHhNtGVc7PfWUPeOMDYvt-NQp7BsJfl-Q"
    },
    {
      title: "Как показывать переменные на странице в React?",
      description: "Как выводить текст и данные",
      gaid: "Гайд по выводу переменных",
      info: "Представь, что у тебя есть табличка с именем человека. Чтобы показать это имя на сайте, ты вставляешь переменную в фигурные скобки {}. Так React понимает, что здесь нужно подставить реальное значение. В скобках можно писать не только переменные, но и простые вычисления и условия.",
      code: "const name = 'Алексей';\nconst age = 25;\n\nfunction Greeting() {\n  return <>\n    <h1>Привет, {name}!</h1>\n    <p>Тебе {age} лет</p>\n  </>;\n}\n\nexport default Greeting;",
      image: "https://elbrusboot.camp/blog/content/images/2024/03/-----------------------------JavaScript.png"
    },
    {
      title: "Как работать с структурой папок, что такое public и src папки?",
      description: "Понимание структуры проекта",
      gaid: "Гайд по структуре папок в React",
      info: "Когда ты создаёшь проект, у тебя появляется папка `src` — это как мастерская, где ты будешь создавать свои компоненты и писать код. Внутри `src` обычно есть `index.js` — это входная точка, откуда начинается всё приложение. Папка `public` — это как витрина магазина, куда ты можешь положить статические файлы (картинки, шрифты), которые будут доступны по прямой ссылке.",
      code: "my-app/\n  public/\n    index.html\n    logo.png\n  src/\n    App.jsx\n    index.js",
      image: "https://habrastorage.org/getpro/habr/upload_files/f0f/e59/74b/f0fe5974ba509d6ce60c3f70b11f9ed4.png",
    },
    {
      title: "Как работает импорт и экспорт в React?",
      description: "Как делиться кодом между файлами",
      gaid: "Гайд по импорту и экспорту",
      info: "Импорт и экспорт — это как обмен вещами между друзьями. Если ты создал компонент в одном файле и хочешь использовать его в другом, ты должен его экспортировать (сделать доступным) и импортировать (забрать). Есть два вида экспорта: по умолчанию (default) и именованный (named).",
      code: "// В Button.jsx\nexport default function Button() {\n  return <button>Нажми меня</button>;\n}\n\n// В App.jsx\nimport Button from './Button';\n\nfunction App() {\n  return <Button />;\n}\n\nexport default App;",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUeAbaJaJQi2Tee9oT003vo8u0j7IRN97KA&s",
    },
    {
      title: "Как выводить изображения из папки public в React?",
      description: "Как показывать картинки в React",
      gaid: "Гайд по выводу изображений в React",
      info: "Чтобы вывести изображение из папки `public`, нужно просто указать путь к файлу в атрибуте `src` тега `<img>`. Например, если у тебя есть файл `logo.png` в папке `public`, ты можешь использовать его так: `<img src=\"/logo.png\" alt=\"Логотип\" />`.",
      code: "<img src=\"/logo.png\" alt=\"Логотип\" />",
      image: "https://itproger.com/img/news/cartoon_design_1.jpg"
    },
    {
      title: "Что такое массивы в JavaScript?",
      description: "Простое объяснение массивов",
      gaid: "Гайд по массивам для новичков",
      info: "Массив — это как список покупок в магазине. В одной переменной ты хранишь много значений. Каждый элемент имеет свой номер (индекс), начиная с 0. Массивы очень часто используются в React для хранения списков данных (пользователи, товары, посты и т.д.).",
      code: "const shoppingList = ['молоко', 'хлеб', 'яйца'];\n\nshoppingList.push('масло');\n\nconsole.log(shoppingList[0]); // молоко\nconsole.log(shoppingList.length); // 4",
      image: "https://media.proglib.io/posts/2022/04/26/9857bc7a62528a90f5f3348eb6a00221.jpg"
    },
    {
      title: "Что такое метод .map() и как он работает?",
      description: "Самый полезный метод для массивов",
      gaid: "Понятное объяснение .map()",
      info: "Метод .map() — это как конвейер на заводе. Ты даёшь ему массив, а он возвращает новый массив, в котором каждый элемент был обработан по твоим правилам. Исходный массив при этом остаётся без изменений. Это один из самых важных методов в React.",
      code: "const fruits = ['яблоко', 'банан', 'апельсин'];\n\nconst fruitList = fruits.map(fruit => `Фрукт: ${fruit}`);\nconsole.log(fruitList);",
      image: "https://habrastorage.org/webt/ar/v-/sc/arv-sc71qdyofsvexdn4y35n56q.jpeg"
    },
    {
      title: "Как использовать .map() в React?",
      description: "Выводим список на страницу",
      gaid: "Использование .map() в React",
      info: "В React списки почти всегда создаются через .map(). Например, у тебя есть список друзей — .map() превращает каждый объект в элемент `<li>` или карточку. Обязательно добавляй `key={}` с уникальным значением (лучше всего `id`), чтобы React мог быстро обновлять список.",
      code: "const friends = [\n  { id: 1, name: 'Маша' },\n  { id: 2, name: 'Дима' }\n];\n\nfunction FriendList() {\n  return (\n    <ul>\n      {friends.map(friend => (\n        <li key={friend.id}>{friend.name}</li>\n      ))}\n    </ul>\n  );\n}",
      image: "https://i.ytimg.com/vi/DCoscmiugOE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0BVaHvn9FtkKxuEAeNCxhvOpAjQ"
    },
    {
      title: "Почему все используют .map() в React?",
      description: "Преимущества .map()",
      gaid: "Почему .map() — это круто",
      info: "Представь, что ты вручную пишешь 100 элементов списка — это очень долго и неудобно. С .map() код короткий, чистый и автоматически обновляется при изменении данных. Он поддерживает иммутабельность (не ломает исходные данные) и отлично работает с ключами `key`.",
      code: "const friends = [\n  { id: 1, name: 'Маша' },\n  { id: 2, name: 'Дима' }\n];\n\nfunction FriendList() {\n  return (\n    <ul>\n      {friends.map(friend => (\n        <li key={friend.id}>{friend.name}</li>\n      ))}\n    </ul>\n  );\n}",
      image: "https://i.ytimg.com/vi/IG2I3j1vCfQ/sddefault.jpg"
    },
    {
      title: "Цикл for — простое объяснение для новичков",
      description: "Как работает классический цикл",
      gaid: "Гайд по циклу for",
      info: "Цикл for — это как счётчик. Ты задаёшь: с какого числа начинать, до какого продолжать и как изменять счётчик. Полезен, когда нужно выполнить одно и то же действие несколько раз (например, вывести числа или обработать элементы).",
      code: "for (let i = 0; i < 5; i++) {\n  console.log('Повторение номер:', i);\n}",
      image: "https://media.proglib.io/posts/2022/04/26/9857bc7a62528a90f5f3348eb6a00221.jpg"
    },
    {
      title: "Цикл for...of в React",
      description: "Альтернативный способ перебирать массивы",
      gaid: "Когда можно использовать for в React",
      info: "Хотя .map() почти всегда удобнее, иногда можно использовать for...of. Ты перебираешь элементы и собираешь их в новый массив. Но для вывода списков в React метод .map() считается более правильным и коротким способом.",
      code: "const items = [];\nfor (const friend of friends) {\n  items.push(<li key={friend.id}>{friend.name}</li>);\n}\nreturn <ul>{items}</ul>;",
      image: "https://pythonru.com/wp-content/uploads/2019/01/cikl-for-v-python-3.png"
    },
    {
      title: "Что такое компоненты в React?",
      description: "Основной строительный блок React",
      gaid: "Гайд по компонентам",
      info: "Компонент — это как одна Lego-деталька. Это отдельная функция или класс, которая возвращает JSX. Хорошие компоненты — маленькие, делают одну конкретную вещь и легко переиспользуются (кнопка, карточка товара, шапка сайта).",
      code: "function Button({ text }) {\n  return <button>{text}</button>;\n}\n\nexport default Button;",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsp2k_Iz5oUYFcBO_UtfbAxio6b6mYs_XHQ&s"
    },
    {
      title: "Как передавать данные через props?",
      description: "Обмен информацией между компонентами",
      gaid: "Гайд по props",
      info: "Props (properties) — это как посылка, которую ты передаёшь от родительского компонента к дочернему. С помощью props ты можешь передавать текст, числа, массивы, функции и даже другие компоненты.",
      code: "function Welcome({ name, age }) {\n  return <h1>Привет, {name}! Тебе {age} лет.</h1>;\n}\n\nfunction App() {\n  return <Welcome name=\"Алексей\" age={25} />;\n}",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-KMlzIaER-ithH4ChuiRiGqC8GK1L9hpYw&s"
    },
    {
      title: "Что такое состояние (useState)?",
      description: "Как делать интерактивные элементы",
      gaid: "Простое объяснение useState",
      info: "Состояние — это данные, которые могут меняться. Например: счётчик, открыто/закрыто меню, текст в поле ввода. Когда состояние меняется, React автоматически обновляет интерфейс. `useState` — самый простой хук для работы с состоянием.",
      code: "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <>\n      <p>Счётчик: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+1</button>\n    </>\n  );\n}",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-KMlzIaER-ithH4ChuiRiGqC8GK1L9hpYw&s"
    },
    {
      title: "Небольшой гайд по терминалу Linux для новичков а точнее команды: cd, ls, mkdir, touch, rm",
      description: "Основные команды для работы с терминалом",
      gaid: "Гайд по терминалу Linux",
      info: "Терминал — это как командная строка, где ты можешь управлять компьютером с помощью текста. Команды: `cd` — сменить папку, `ls` — показать содержимое папки, `mkdir` — создать папку, `touch` — создать файл, `rm` — удалить файл или папку.",
      code: "cd my-project\nls\nmkdir src\ncd src\ntouch App.jsx\nrm App.jsx",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eXAqe6w8WvrRb-ZOuTofxraN8Z1AXJiUdA&s"
    },
    {
      title: "Как работать с Math и случайными числами в JavaScript?",
      description: "Math.random(), округление и условия",
      gaid: "Гайд по Math и случайным числам",
      info: "Math.random() возвращает случайное число от 0 (включительно) до 1 (не включая). С его помощью можно делать случайные выборы, игры, тесты. Также очень полезны Math.floor(), Math.ceil(), Math.round() для округления. Условия (if, else) помогают принимать решения в коде в зависимости от значения.",
      code: "const random = Math.random(); // 0.0 - 0.999...\n\nconst randomNumber = Math.floor(Math.random() * 100) + 1; // случайное от 1 до 100\n\nconst num = 7;\n\nif (num > 10) {\n  console.log('Большое число');\n} else if (num > 5) {\n  console.log('Среднее число');\n} else {\n  console.log('Маленькое число');\n}\n\n// Пример в React:\nfunction RandomDice() {\n  const [roll, setRoll] = useState(1);\n  return (\n    <>\n      <p>Выпало: {roll}</p>\n      <button onClick={() => setRoll(Math.floor(Math.random() * 6) + 1)}>\n        Бросить кубик\n      </button>\n    </>\n  );\n}",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQGZOlvNckIdXw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1671861031037?e=2147483647&v=beta&t=n6ieyEkMRRIHhNtGVc7PfWUPeOMDYvt-NQp7BsJfl-Q"
    }
  ];

  const pet_idea = [
      {
        title: "Простая энциклопедия про море",
        description: "Создай красивую одностраничную энциклопедию о море. Используй только HTML + CSS + немного JavaScript (можно с React). Добавь карточки с животными, фактами, красивые картинки и навигацию."
      },
      {
        title: "Казино с обновлением баланса",
        description: "Простое казино на удачу. При каждой перезагрузке страницы или нажатии кнопки «Крутить» баланс меняется с помощью Math.random(). Добавь разные ставки, выигрыши и красивый дизайн."
      },
      {
        title: "Todo List (Список дел)",
        description: "Классический проект. Добавляй, удаляй, отмечай выполненные задачи. Можно добавить сохранение в localStorage, чтобы задачи не пропадали при перезагрузке."
      },
      {
        title: "Счётчик с историей",
        description: "Простой, но красивый счётчик. Добавь кнопки +1, -1, Reset и историю изменений (когда и на сколько изменилось)."
      },
      {
        title: "Викторина (Quiz)",
        description: "Тест с несколькими вопросами. Показывай результат в конце, счётчик правильных ответов и возможность пройти заново."
      },
      {
        title: "Портфолио разработчика",
        description: "Сделай личный сайт-портфолио. Разделы: Обо мне, Навыки, Проекты, Контакты. Красивый дизайн — обязательно!"
      },
      {
        title: "Погодное приложение",
        description: "Приложение, которое показывает погоду (можно использовать бесплатный API, например OpenWeather). Поиск по городу + иконки погоды."
      },
      {
        title: "Список фильмов",
        description: "Каталог фильмов. Можно добавить поиск, фильтры по жанру, карточки с постерами и рейтингом (данные можно захардкодить)."
      },
      {
        title: "Калькулятор чаевых",
        description: "Очень полезный небольшой проект. Вводишь сумму счёта, выбираешь процент чаевых, количество людей — получаешь результат."
      },
      {
        title: "Генератор мемов",
        description: "Выбираешь шаблон мема, вводишь верхний и нижний текст — получаешь готовый мем. Можно добавить скачивание."
      },
      {
        title: "Таймер Помодоро",
        description: "Классический таймер 25 минут работа + 5 минут отдых. С звуковым уведомлением и красивым дизайном."
      },
      {
        title: "Интерактивная карта желаний",
        description: "Доска, куда можно добавлять свои цели с картинками и описанием (как vision board)."
      }
    ];


    return (
        <>
          <h1>Спидран по React</h1>
          <div className="App">
            {information.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h3>{item.gaid}</h3>
                <p>{item.info}</p>
                <p className="code">{item.code}</p>
                <img src={item.image} alt={item.title} />
              </div>
            ))}
          </div>

          <h1>Надеюсь, тебе понравился сайт! А вот идеи для пет-проектов (от простых к сложнее):</h1>
          <div className="App">
            {pet_idea.map((idea, index) => (
              <div key={index}>
                <h2>{idea.title}</h2>
                <p>{idea.description}</p>
              </div>
            ))}
          </div>
        </>
      );
}

export default App;