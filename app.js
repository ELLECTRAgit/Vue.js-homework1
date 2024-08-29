const App = {
    data () {
        return {
            title: 'Notes',
            visibleNote: [],
            editNote: [],
            inputNote: false,
            input: {
                value: '',
                placeholder: 'Укажите задачу',
            },
            notes: ['test1', 'test2', 'test5'],
        };
    },
    mounted () {
        this.getNotes();
    },
    methods: {
        onSubmit () {
            this.notes.push(this.input.value);
            this.input.value = "";
        },
        remove(index) {
                this.notes.splice (index, 1);
            },
        getNotes () {
                const localNotes = localStorage.getItem('notes');
                if (localNotes) {
                    this.notes = JSON.parse(localNotes);
                }
            },
            changeNote (index) {
                this.visibleNote[index] = !this.visibleNote[index];
            },
    },
    watch:  {
        notes: {
            handler: function (newNotes) {
                localStorage.setItem('notes', JSON.stringify(newNotes));
            },
            deep: true,
        },
    },
};
Vue.createApp (App).mount('#app');