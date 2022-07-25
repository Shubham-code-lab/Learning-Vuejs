<template>
    <section>
        <header>
            <h1>
                My Friend
            </h1>
        </header>

        <add-friend @newFriend="addFriendMethod"></add-friend>


        <ul>
            <!-- <friend-detail name="Shubham Shinde" phone-number="1902 1839 3891" email-address="shubham@gmail.com"
                :is-favorite="true">    //bind the data inoreder to pass other data type
            </friend-detail>
            <friend-detail name="Jeevan Mali" phone-number="1234 5686 0987" email-address="jeevan@gmail.com">
            </friend-detail> -->


            <!-- key is mandatory to define here -->
            <friend-detail v-for="friend in friendList" :key="friend.id" :friend-id="friend.id" :name="friend.name"
                :phone-number="friend.phone" :email-address="friend.email" :is-favorite="friend.favroite"
                @favorite-toggle="toggleFavroiteMethod" @delete-friend="deleteFriendMethod">
            </friend-detail>
        </ul>

    </section>
</template>



<script>


export default {
    data() {
        return {
            friendList: [
                {
                    id: 'SS',
                    name: 'Shubham Shinde',
                    phone: '1902 1839 3891',
                    email: 'shubham@gmail.com',
                    favroite: true,
                },
                {
                    id: 'JM',
                    name: 'Jeevan Mali',
                    phone: '1234 5686 0987',
                    email: 'jeevan@gmail.com',
                    favroite: false,
                },
            ],
        };
    },
    methods: {
        toggleFavroiteMethod(id) {
            let friend = this.friendList.find((friend) => friend.id === id);
            friend.favroite = !friend.favroite;
        },
        addFriendMethod(newname, newphone, newemail, newfavorite) {
            let newId = newname.split(' ').map(x => x[0]).join('');
            let newFriend = {
                id: newId,
                name: newname,
                phone: newphone,
                email: newemail,
                favroite: newfavorite
            }
            this.friendList.push(newFriend);
        },
        deleteFriendMethod(id) {
            this.friendList = this.friendList.filter(friend => friend.id !== id);
        }
    }
};

</script>


<style>
* {
    box-sizing: border-box;
}

html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li,
#app form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
}

#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
    font: inherit;
    padding: 0.15rem;
}

#app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
}

#app form div {
    margin: 1rem 0;
}
</style>