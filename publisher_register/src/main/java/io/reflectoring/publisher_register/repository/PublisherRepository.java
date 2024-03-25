package io.reflectoring.publisher_register.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import io.reflectoring.publisher_register.model.Publisher;

@Repository
public interface PublisherRepository extends MongoRepository<Publisher, String> {

}