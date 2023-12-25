/*
* Observer is a behavioral design pattern that lets you define a 
* subscription mechanism to notify multiple objects about any events 
* that happen to the object they’re observing.
*/
#include <iostream>
#include <vector>

using namespace std;

// Interface Observer, which used for notification about update
class Observer {
public:
    virtual void update(int data) = 0;
    virtual ~Observer() = default;
};

// class that is an observer and can have many subscribers
class Subject {
    int state;
    vector<Observer*> observers;

public:
    void attach(Observer* observer) {
        observers.push_back(observer);
    }

    void setState(int newState) {
        state = newState;
        notify(); // Notify all subscribers about a change in status
    }

    int getState() const {
        return state;
    }

    void notify() {
        for (Observer* observer : observers) {
            observer->update(state);
        }
    }
};

// Implementation of a specific observer
class ConcreteObserver : public Observer {
public:
    void update(int data) override {
        cout << "Update received. new state: " << data << endl;
    }
};
int main() {
    Subject subject;

    ConcreteObserver observer1;
    ConcreteObserver observer2;

    subject.attach(&observer1);
    subject.attach(&observer2);

    // Using the getState method to get the current state
    cout << "Statrt state: " << subject.getState() << endl;

    // Status change and watcher notification
    subject.setState(5);

    return 0;
}
