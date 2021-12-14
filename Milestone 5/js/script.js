Vue.config.devtools = true;

const app = new Vue(
    {

        el: '#root',

        data: {
            currentActiveChat: 2,
            chatsList: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            searchIcon: true,
            contactClicked: false,
            userMessage: '',
            chatFilterText: '',
            getMessageClock: null,
            lastMsgMaxCharacters: 20,
            showBox: false,
            chatIndexShow: null
        },

        methods: {
            // Funzione per inviare un nuovo messaggio 
            newMessage: function(){

                const timeAndDay = dayjs().format("DD/MM/YYYY HH:mm:ss");

                this.chatsList[this.currentActiveChat].messages.push(
                    {
                        date: timeAndDay,
                        text: this.userMessage,
                        status: 'sent'
                    }
                );
                // Debug per svuotare la input area all'invio
                this.userMessage = '';
                // Faccio partire la funzione per ricevere il messaggio con ritardo di un secondo
                this.getMessageClock = setTimeout(() => {
                    this.chatsList[this.currentActiveChat].messages.push(
                        {
                            date: timeAndDay,
                            text: 'Okay',
                            status: 'received'
                        }
                    );
                }, 1000);
            },
            // Funzione per cambiare chat attiva
            switchChat: function(thisContactIndex){
                this.currentActiveChat = thisContactIndex;
            },
            // Funzione per cercare i contatti tramite filtro
            contactsFilter: function(){
                this.chatsList.forEach((element) => {
                    if(element.name.toLowerCase().includes(this.chatFilterText.toLowerCase().trim())){
                        element.visible = true;
                    } else{
                        element.visible = false;
                    }
                });
            },
            // Funzione per far apparire la box per il "Delete message" al click sulla arrow (toggle)
            showDeleteBox: function(thisChatIndex){
                // Per evitare di aprire tutti i box, verrà aperto quello che corrisponde col chatIndexShow
                this.chatIndexShow = thisChatIndex;
                this.showBox = !this.showBox;
            },
            // Funzione per eliminare il messaggio selezionato al click su "Delete message"
            // Mi prendo l'indice del messaggio per far capire a splice l'indice del messaggio da eliminare
            deleteMessage: function(thisChatIndex){
                this.chatsList[this.currentActiveChat].messages.splice(thisChatIndex,1);
                // Debug per evitare che la tendina rimanga aperta sul messaggio successivo al delete di uno
                this.chatIndexShow = null;
            }
        },

        created: function(){
            
        }

    }
);