<template>
    <base-card>
        <base-button @click="activateComponent('stored-resources')" :mode="activeButtonStoredComponent">Show
            Information
        </base-button>
        <base-button @click="activateComponent('add-resources')" :mode="activeButtonAddComponent">Add Information
        </base-button>
    </base-card>
    <keep-alive>
        <component :is="activeComponent"></component>
    </keep-alive>
</template>

<script>
import AddResources from './AddResources.vue';
import StoredResources from './StoredResources.vue';

export default {
    components: {
        AddResources,
        StoredResources
    },
    provide() {
        return {
            resources: this.storedResources,
            addNewSong: this.addNewSong,
            deleteResources: this.removeResources
        }
    },
    data() {
        return {
            activeComponent: 'stored-resources',

            storedResources: [{
                id: '1',
                title: 'Kanada Raja Pandharicha',
                description: 'With Ashadhi Ekadashi around the corner, uploading the video Kanada Raja Pandharicha from Sur Nava Dhyas Nava Season 2',
                link: 'https://www.youtube.com/watch?v=GA1x7iadCwo&list=RDGMEM916WJxafRUGgOvd6dVJkeQ&index=4'
            },
            {
                id: '2',
                title: 'Kun Faya Kun',
                description: ' Rockstar whole album is super fantastic but one track that simply class apart is "Kun Faya Kun"',
                link: 'https://www.youtube.com/watch?v=T94PHkuydcw&list=RDGMEM916WJxafRUGgOvd6dVJkeQ&index=5'
            }]
        };
    },
    methods: {
        activateComponent(comp) {
            this.activeComponent = comp;
        },
        addNewSong(newTitle, newDescription, newLink) {
            const newSong = {
                id: new Date().toISOString(),
                title: newTitle,
                description: newDescription,
                link: newLink
            };
            this.storedResources.unshift(newSong);
            this.activeComponent = 'stored-resources';
        },
        removeResources(resourceId) {
            const resourceIndex = this.storedResources.findIndex(res => res.id === resourceId);
            this.storedResources.splice(resourceIndex, 1);
        }
    },
    computed: {
        activeButtonStoredComponent() {
            return this.activeComponent === 'stored-resources' ? null : 'flat';
        },
        activeButtonAddComponent() {
            return this.activeComponent === 'add-resources' ? null : 'flat';
        }
    }
};
</script>

<style>
</style>

