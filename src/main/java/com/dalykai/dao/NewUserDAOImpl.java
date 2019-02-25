package com.dalykai.dao;

import com.dalykai.entity.NewUser;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;


@Repository
public class NewUserDAOImpl implements NewUserDAO {

private EntityManager entityManager;

    @Autowired
    public NewUserDAOImpl(EntityManager theEntityManager) { entityManager = theEntityManager;}

    @Override
    public List<NewUser> findAll() {
        Session currentSession = entityManager.unwrap(Session.class);
       Query<NewUser> theQuery = currentSession.createQuery("from NewUser", NewUser.class);
        List<NewUser> newUsers = theQuery.getResultList();

        return newUsers;
    }

    @Override
    public NewUser findById(int theId) {

    Session currentSession = entityManager.unwrap(Session.class);
    NewUser theNewUser = currentSession.get(NewUser.class, theId) ;

    return theNewUser;
    }

    @Override
    public void save(NewUser theNewUser) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theNewUser);

    }

    @Override
    public void deleteById(int theId) {


    }
}
