import { Component } from "../core/component.js";
import { Storage } from "../core/storage.js";
import { formCreatePostModal } from "../index.js";
import { renderPosts } from "../template/render-posts.js";

export class PageContent extends Component {
    constructor(id, pageAuthorization) {
        super(id)
        this.pageAuthorization = pageAuthorization
    }

    init() {
        this.logoutBtn = document.getElementById('header-btn')
        this.logoutBtn.addEventListener('click', onLogoutHandler.bind(this))
        this.createBtn = document.getElementById('create-btn')
        this.createBtn.addEventListener('click', onShowFormCreatePostHandler.bind(this))
        this.todoList = document.querySelector('.todos-container')

        this.welcome = document.getElementById('welcome')
    }

    onShow() {
        this.todoList.innerHTML = ''
        this.welcome.innerText = Storage.getUserData().name
        const postsElemtnts = renderPosts()
        this.todoList.insertAdjacentHTML('afterbegin', postsElemtnts)
    }
}

function onLogoutHandler() {
    this.hide()
    localStorage.setItem('selectedUserId', null)
    this.pageAuthorization.show()
}

function onShowFormCreatePostHandler() {
    formCreatePostModal.show()
}