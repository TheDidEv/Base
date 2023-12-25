/*
* Adapter is a structural design pattern that allows objects 
* with incompatible interfaces to collaborate.
*/
#include <iostream>

using namespace std;


/*

in this example, we make an adapter with the help of which we 
can run something from the OldPlayer through the MediaPlayer

*/


// It`s interfase, which we wont use
class MediaPlayer {
public:
    virtual void play() const = 0;
    virtual ~MediaPlayer() = default;
};

// class, which we wont adapt
class OldPlayer {
public:
    void startPlayback() const {
        cout << "Old player msg" <<endl;
    }
};

// Adapter, which provide ratio between MediaPlayer фтв OldPlayer
class PlayerAdapter : public MediaPlayer {
private:
    OldPlayer oldPlayer;

public:
    void play() const override {
        oldPlayer.startPlayback();
    }
};

// function which use MediaPlayer
void playMedia(const MediaPlayer& player) {
    cout << "Play media on function which use MediaAdpter..." << endl;
    player.play();
}

int main() {
    // create Adapter object
    PlayerAdapter adapter;

    // call function which use MediaPlayer,
    // passing an adapter that calls the OldPlayer method via MediaPlayer
    playMedia(adapter);

    return 0;
}
