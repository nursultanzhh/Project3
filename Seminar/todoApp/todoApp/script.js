document.addEventListener("DOMContentLoaded", () => {
  const ul = document.getElementById("myUL");
  const input = document.getElementById("myInput");
  const addBtn = document.getElementById("addBtn");
  const clearDoneBtn = document.getElementById("clearDoneBtn");

  // Функция создания элемента списка с кнопкой удаления
  const createListItem = (text) => {
    const li = document.createElement("li");
    li.textContent = text;

    const closeBtn = document.createElement("span");
    closeBtn.textContent = "×";
    closeBtn.className = "close";
    li.append(closeBtn);

    return li;
  };

  // Добавление одной задачи 
  const addTaskToList = (text) => {
    ul.append(createListItem(text));
  };

   

  // Инициализация — здесь можно добавить стартовые задачи или оставить пустым
  const init = () => {
    // Например, можно добавить demo-задачу:
    // addTaskToList("Демо: Первая задача");
  };

  // Привязка обработчиков событий
  const bindEvents = () => {

// ===== TASK 1 =====
    addBtn.addEventListener("click", () => {
      const txt = input.value;
      addTaskToList(txt);
      input.value="";
    });

    // ===== TASK 2 =====
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter") { 
        const txt = input.value;
        addTaskToList(txt)};

      });
    // ===== TASK 3 =====

    ul.addEventListener("click", (e) => {
      if (e.target.tagName==="li"){
      e.target.classlist.toggle("checked")
      }
      e.target.remove()
    });

    // ===== TASK 4 =====
    
    clearDoneBtn.addEventListener("click", () => {
      const checked = ul.querySelectorAll("li.checked");
      console.log(checked);
      checked.forEach((li) => {
        li.remove();
      });
    });
  
  // Запуск приложения
  init();
  bindEvents();
  }
});
