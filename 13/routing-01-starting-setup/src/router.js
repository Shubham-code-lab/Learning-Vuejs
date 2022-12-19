import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';


const router = createRouter({
    history: createWebHistory(), //tell to use default browser history 
    routes: [ 
        { path: '/', component: TeamsList }, // link is just root / but still display TeamsList component 
        // { path: '/teams', component: TeamsList, alias: '/' }, //work same as above
        // { path: '/', redirect: '/teams' }, // when you are on home page redirect to from / to /teams
        {
            name: 'teams', //name are usefull because if we change path /teams to /anything here we have to change that link to all the component router-link to but using name we just have to do it here
            path: '/teams',
            meta: { userAuth: true }, // you can use this meta data where  route object is available i.e (to) parameter of beforeRoute ,this.$route,etc
            components: { //multiple component at same level
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [{
                    name: 'team-memebers',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true,
                    beforeEnter(to, from, next) {
                        console.log("Route beforeEnter");
                        console.log(to, from);
                        next();
                    }
                }, ] //as this component is child of TeamsList we should use router-view in  teamsList component as well in order to display it
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
        },
        // { path: '/teams/:teamId', component: TeamMembers, props: true },
        { path: '/:anyName(.*)', component: NotFound } //when no component is found it load this component in paraenthesis contain regular expression
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) { //to = current link, from = page that we come from, savedPosition = scroll position of from page 
        // scrollBehavior(_, _2, savedPosition) { // use underscore if you don't want those parameter but mention them in order to get third parameter 
        if (savedPosition) { //my research = you visit page one scroll to bottom then you visit page two scroll to top again you visit page one it get loaded from top (even if you visitied same page twice it get laoad from top but when you press browser back button it get loaded were you scroll was left even it is same page)
            return savedPosition;
        } else {
            return { left: 0, top: 0 } // it make all page to load at top position
        }
    },
});

router.beforeEach(function(to, from, next) {
    console.log("global beforeEach");
    console.log(to, from);
    next();

    // if (to.meta.userAuth) {     //use of meta
    //     next();
    // }

    // OR next(true);
    //next(false);  //to don't allow user to access the page

    // if (to.name === 'team-members') { //check to prevent infinite loop
    //     next(); //allow user to redirect to next url
    // } else {
    //     next({ name: 'team-members', parms: { teamId: 't2' } }); //this path with again call the beforeEach so we have to check
    // } //this will always redirect to team-members so we are commenting it
});

router.afterEach(function(to, from) { 
    console.log('Global afterEach');
    //execute at last so you can send analitical data
    console.log(to, from);
});


export default router;