<template>
    <div class="dashboard-wrapper">
        <Sidebar />
        <div class="main-content">
            <Header />
            <div class="dashboard-content">
                <div class="widgets-grid">
                    <div>
                        <WebsiteTrafficWidget />
                    </div>
                    <div>
                        <ReportWidget />
                    </div>
                    <div>
                        <BounceRateWidget />
                    </div>
                    <div>
                        <ROIWidget />
                    </div>
                    <div>
                        <WebScore />
                    </div>
                    <div>
                        <ChurnRateWidget />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import WebsiteTrafficWidget from '../components/widgets/WebsiteTrafficWidget.vue'
import ROIWidget from '../components/widgets/ROIWidget.vue'
import BounceRateWidget from '../components/widgets/BounceRateWidget.vue'
import ChurnRateWidget from '../components/widgets/ChurnRateWidget.vue'
import ReportWidget from '../components/widgets/ReportWidget.vue'
import WebScore from '../components/widgets/WebScore.vue'
</script>

<style scoped>
.dashboard-wrapper {
    display: flex;
    min-height: 100vh;
    background-color: #111827; 
}

.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.dashboard-content {
    flex: 1;
    padding: 2rem;
    overflow-y: auto;
}

/* Grid para los widgets */
.widgets-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
}

</style>