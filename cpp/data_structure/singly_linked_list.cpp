#include <iostream>

using namespace std;

class Node {
public:
	int data;
	Node* next;

	Node() {// Default constructor 
		data = 0;
		next = NULL;
	}

	Node(int data) {// Parameterised Constructor 
		this->data = data;
		this->next = NULL;
	}
};

class Linkedlist {
	Node* head;

public:
	Linkedlist() { // Default constructor 
		head = NULL;
	}

	void postNode(int);

	void deleteNode(int);

	void getNode();
};

//for add new node
void Linkedlist::postNode(int data) {
	Node* newNode = new Node(data);

	if (head == NULL) {
		head = newNode;
		return;
	}

	Node* temp = head;
	while (temp->next != NULL) {
		temp = temp->next;
	}

	// Insert at the last. 
	temp->next = newNode;
}

void Linkedlist::deleteNode(int nodeOffset) {
	Node* temp1 = head;
	Node* temp2 = NULL;
	int ListLen = 0;

	if (head == NULL) {
		cout << "List empty." << endl;
		return;
	}

	while (temp1 != NULL) {
		temp1 = temp1->next;
		ListLen++;
	}

	if (ListLen < nodeOffset) {
		cout << "Index out of range"
			<< endl;
		return;
	}
	temp1 = head;

	if (nodeOffset == 1) {
		head = head->next;
		delete temp1;
		return;
	}

	while (nodeOffset-- > 1) {
		temp2 = temp1;
		temp1 = temp1->next;
	}

	temp2->next = temp1->next;

	delete temp1;
}

void Linkedlist::getNode() {//print on console
	Node* temp = head;

	if (head == NULL) {
		cout << "List empty" << endl;
		return;
	}

	while (temp != NULL) {
		cout << temp->data << " ";
		temp = temp->next;
	}
}

int main()
{
	Linkedlist list;

	list.postNode(1);
	list.postNode(2);
	list.postNode(3);
	list.postNode(4);
	list.postNode(5);

	list.getNode();
	cout << endl;

	list.deleteNode(3);
	list.getNode();
}
