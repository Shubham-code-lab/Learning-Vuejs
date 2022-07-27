<template>
    <div>   
        <transition-group name="userNames" tag="ul">
            <li v-for='user in users' :key="user" @click="removeUser(user)">{{user}}</li>
        </transition-group>
    </div>
    <div>
        <input type="text" v-model="newUser">
        <button @click="addUser" >Add User</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            users:['shubham','jeevan','saurabh','abba'],
            newUser:null
        }
    },
    methods: {
        removeUser(userName){
            this.users = this.users.filter((user)=>user!==userName);
        },
        addUser(){
            this.users.unshift(this.newUser);
        }
    },
}
</script>
<style scoped>
    ul{
        list-style: none;
        margin: 0px;
        padding: 0px;
    }
    li{
        border: 0.1rem solid #ccc;
        padding: 0.1rem;
        text-align: center;
    }
    .userNames-enter-from{
        transform: translateX(-30px);
        opacity: 0;
    }
    .userNames-enter-active,
    .userNames-leave-active{
        transition: all 0.3s ease-in;
    }

/*when item leave it appear smooth */
    .userNames-leave-active{
        position: absolute;
    }

    .userNames-enter-to,
    .userNames-leave-from{
        transform: translateX(0);
        opacity: 1;
    }

    .userNames-leave-to{
        transform: translateX(30px);
        opacity: 0;
    }

/* when item leave or enter it make smooth transition but when item leave we have to set leave-active to position absolute */
    .userNames-move{
        transition: transform 0.8s ease-in;
    }

</style>