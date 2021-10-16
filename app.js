const getTodoList = () => {
	const todoList = localStorage.getItem('todoList') || '[]'
	return JSON.parse(todoList)
}
const addTodoList = () => {
	const todoTitle = document.querySelector('#todoTitle')
	if (todoTitle.value) {
		const currentTodoList = getTodoList()
		const todoItem = {
			title: todoTitle.value,
			isdone: false
		}
		const updateTodoList = [todoItem, ...currentTodoList]
		localStorage.setItem('todoList', JSON.stringify(updateTodoList))

		todoTitle.value = ''
		showTodoList()
	}
	return false
}
addTodoList()

const showTodoList = () => {
	const todoList = getTodoList()
	const ul = document.getElementById('todoList')
	ul.innerText = ' '
	todoList.forEach((todoItem) => {
		const li = document.createElement('li')
		li.innerHTML = todoItem.title

		ul.append(li)
	})
}
const updateTodoList = (todoItemtitle) => {
	const currentTodoList = getTodoList()
	const updateTodoList = currentTodoList.map((todoItem) => {
		if (todoItem.title === todoItemtitle) {
			todoItem.isdone = !todoItem.isdone
		}
		return todoItem
	})
	localStorage.setItem('todoList', JSON.stringify(updateTodoList))
	showTodoList()
}

document.getElementById('todoList').addEventListener('click', (e) => {
	const tagName = e.target.tagName
	if (tagName === 'LI') {
		updateTodoList(e.target.innerText.replace(''))
	}
})
showTodoList()
