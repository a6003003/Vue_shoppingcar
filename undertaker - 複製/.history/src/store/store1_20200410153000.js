import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
        // ?�e�΋�
        user: {
            name: 'coffce',
            img: 'dist/images/1.jpg'
        },
        // �N?�C��
        sessions: [
            {
                id: 1,
                user: {
                    name: '�ܨҤ�?',
                    
                },
                messages: [
                    {
                        content: 'Hello�A?�O�@�İ�_Vue + Vuex + Webpack�۫ت�??chat�ܨҡA���??�O�s�blocalStorge, �����\??�i�H�q?Github Issue?�ڡC',
                        date: now
                    }, {
                        content: '?�ئa�}: https://github.com/coffcer/vue-chat',
                        date: now
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: 'webpack',
                    img: 'dist/images/3.jpg'
                },
                messages: []
            }
        ],
        // ?�e?�����N?
        currentSessionId: 1,
        // ??�X�u�]�t?��key���N?
        filterKey: ''
    },
    mutations: {
        INIT_DATA (state) {
            let data = localStorage.getItem('vue-chat-session');
            if (data) {
                state.sessions = JSON.parse(data);
            }
        },
        // �Y�e����
        SEND_MESSAGE ({ sessions, currentSessionId }, content) {
            let session = sessions.find(item => item.id === currentSessionId);
            session.messages.push({
                content: content,
                date: new Date(),
                self: true
            });
        },
        // ??�N?
        SELECT_SESSION (state, id) {
            state.currentSessionId = id;
        } ,
        // �j��
        SET_FILTER_KEY (state, value) {
            state.filterKey = value;
        }
    }
});

store.watch(
    (state) => state.sessions,
    (val) => {
        console.log('CHANGE: ', val);
        localStorage.setItem('vue-chat-session', JSON.stringify(val));
    },
    {
        deep: true
    }
);

export default store;
export const actions = {
    initData: ({ dispatch }) => dispatch('INIT_DATA'),
    sendMessage: ({ dispatch }, content) => dispatch('SEND_MESSAGE', content),
    selectSession: ({ dispatch }, id) => dispatch('SELECT_SESSION', id),
    search: ({ dispatch }, value) => dispatch('SET_FILTER_KEY', value)
};