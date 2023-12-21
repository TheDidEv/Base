/*
* Factory Method is a creational design pattern that provides an interface
* for creating objects in a superclass, but allows subclasses to alter
* the type of objects that will be created.
*/
#include <iostream>
#include <string>

using namespace std;

class Shape {
public:
	virtual void draw() const = 0;
	virtual ~Shape() = default;
};

class Rectangle : public Shape {
public:
	void draw() const override {
		cout << "Drawing a Rectangle" << endl;
	}
};

class Circle : public Shape {
public:
	void draw() const override {
		cout << "Drawing a Circle" << endl;
	}
};

class Triangle : public Shape {
public:
	void draw() const override {
		cout << "Drawing a Triangle" << endl;
	}
};




class ShapeFactory {
public:
	virtual Shape* createShape() const = 0;
	virtual ~ShapeFactory() = default;
};




class RectangleFactory : public ShapeFactory {
public:
	Shape* createShape() const override {
		return new Rectangle();
	}
};

class CircleFactory : public ShapeFactory {
public:
	Shape* createShape() const override {
		return new Circle();
	}
};

class TriangleFactory : public ShapeFactory {
public:
	Shape* createShape() const override {
		return new Triangle();
	}
};




void useFactory(const ShapeFactory& factory) {
	Shape* shape = factory.createShape();
	shape->draw();
	delete shape;
}

int main() {
	RectangleFactory rectFactory;
	cout << "Using Rectangle Factory:" << endl;
	useFactory(rectFactory);

	cout << endl;

	CircleFactory circleFactory;
	cout << "Using Circle Factory:" << endl;
	useFactory(circleFactory);

	cout << endl;

	TriangleFactory triangleFactory;
	cout << "Useng Triangle Factory" << endl;
	useFactory(triangleFactory);

	return 0;
}
