import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://afzhzgaeufygfizasysm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmemh6Z2FldWZ5Z2ZpemFzeXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc2MzA3OTUsImV4cCI6MTk5MzIwNjc5NX0.4BPg60lIeF2lM2CQ9ZfNnw0T5c1X86QP2KybKGUNgGI'
const supabase = createClient(supabaseUrl, supabaseKey)

export async function getServices() {
    let { data: services, error } = await supabase
        .from('services')
        .select('*')

    for (let service of services) {
        let serviceList = document.getElementById('services');
        serviceList.innerHTML += `<tr><td><td>${service.temp}  ${service.title}</td></tr>`;
    }
}