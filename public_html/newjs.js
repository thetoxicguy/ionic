/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const presentButton = document.getElementById("presentBtn")

        customElements.define('modal-page', class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
    <ion-header>
        <ion-toolbar>
            <ion-title>Modal Header</ion-title>
                <ion-buttons slot="primary">
                    <ion-button onClick="dismissModal()">
                        <ion-icon slot="icon-only" name="close"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
    <ion-content class="ion-padding">
    Modal Content
    </ion-content>`;
}
});

function presentModal() {
        // create the modal with the `modal-page` component
        const modalElement = document.createElement('ion-modal');
        modalElement.component = 'modal-page';
        modalElement.cssClass = 'my-custom-class';
        // present the modal
        document.body.appendChild(modalElement);
        return modalElement.present();
}

presentButton.addEventListener('click', 'hola');