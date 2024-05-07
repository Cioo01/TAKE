package lab.app;

import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.core.MediaType;

public class Main {
    public static void main(String[] args) {
        Client client = ClientBuilder.newClient();
        String status =
                client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                                "api/complaints/851/status")
                        .request(MediaType.TEXT_PLAIN)
                        .get(String.class);

        System.out.println("Status: " + status);

        String complaints = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                        "api/complaints")
                .request(MediaType.APPLICATION_JSON)
                .get(String.class);

        System.out.println("Complaints: " + complaints);

        String complaint = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                        "api/complaints/853")
                .request(MediaType.APPLICATION_JSON)
                .get(String.class);

        System.out.println("Complaint: " + complaint);

        String newComplaint = "{\"id\": 855," +
                "\"complaintDate\": \"2024-05-07\"," +
                "\"complaintText\": \"I'm hungry\"," +
                "\"author\": \"Obelix\"," +
                "\"status\":" +
                "\"open\"}";

        String putComplaint = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                        "api/complaints/855")
                .request(MediaType.APPLICATION_JSON)
                .put(Entity.entity(newComplaint, MediaType.APPLICATION_JSON), String.class);

        System.out.println("PUT Complaint: " + newComplaint);

        String allComplaints = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                        "api/complaints")
                .request(MediaType.APPLICATION_JSON)
                .get(String.class);
        System.out.println("All Complaints: " + allComplaints);
        
        client.close();
    }
}
