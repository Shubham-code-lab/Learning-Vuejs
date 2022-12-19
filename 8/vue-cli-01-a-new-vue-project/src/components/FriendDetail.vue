<template>
    <div>
        <!-- <li v-for="friend in friendList" :key="friend.id">
            <h2>{{ friend.name }}</h2>
            <button v-on:click="toggleDetailMethod">Show Detail</button>
            <ul v-if="toggleDetail">
                <li><strong>Phone: </strong>{{ friend.phone }}</li>
                <li><strong>Email: </strong>{{ friend.email }}</li>
            </ul>
    </li>-->    

        <li>
            <h2>{{ name }} {{ isFavorite ? "favroite" : "" }}</h2>
            <button v-on:click="toggleDetailMethod">Show Detail</button>
            <button v-on:click="toggleFavoriteMethod">toggle favorite</button>
            <ul v-if="toggleDetail">
                <li>
                    <strong>Phone:</strong>
                    {{ phoneNumber }}
                </li>
                <li>
                    <strong>Email:</strong>
                    {{ emailAddress }}
                </li>
            </ul>
        </li>
        <button v-on:click="deleteFriendMethod">Remove Friend</button>
    </div>
</template>

<script>
export default {
    //props send data into the component while emits send out of the component;

    // props have unidirectional flow data coming from parent should not be change in child we can change it in parent
    // props: ['name', 'phoneNumber', 'emailAddress', "isFavorite"],
    props: {
        friendId: String,
        name: String,                                   //can be of one one value type
        phoneNumber: {                                  // or we can pass entire object of configuration
            type: String,
            required: true,
        },
        emailAddress: {
            type: String,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            required: false,
            Default: false,                                 //also accept function
            validator: function (value) {                 //return true or false in console of browser
                return value === true || value === false
            }
        }
    },
    emits: ['toggle-favroite', 'delete-friend'],

    // emits: {
    //     'toggle-favroite': function (friendIdCheck) {          // check weather argument is passed or not
    //         if(friendIdCheck) return true;
    //         else{
    //             console.warn("no argument passed called friendid");
    //             return false;
    //         }
    //      }
    // },

    data() {
        return {
            toggleDetail: false
        };
    },
    methods: {
        toggleDetailMethod() {
            this.toggleDetail = !this.toggleDetail;
        },
        toggleFavoriteMethod() {
            this.$emit('favorite-toggle', this.friendId);          //communicating with the parent passing favroite-toggle method and friend id as argument
        },
        deleteFriendMethod() {
            this.$emit('delete-friend', this.friendId);
        }
    }
};
</script>