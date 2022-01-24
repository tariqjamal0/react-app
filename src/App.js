import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="dm">
      <div className="c1">
        <h1>Home (Chess)</h1>
        <img src="images/Rook.jpg"></img>
        <img src="images/knight.jpg"></img>
        <img src="images/bishop.jpg"></img>
        <p></p>
      </div>
      <div className="c2">
        <h1>About</h1>
        <p>Chess is a board game for two players. It is played in a square board, made of 64 smaller squares, with eight squares on each side. Each player starts with sixteen pieces: eight pawns, two knights,
           two bishops, two rooks, one queen and one king. ... The player with white pieces always makes the first move</p>        
      </div>
      <div className="c3">
        <h1>PlayIng Rules</h1>
        <p>Step 1. How To Setup The Chessboard At the beginning of the game the chessboard is laid out
         so that each player has the white (or light) color square in the bottom right-hand side.The chess pieces are then arranged the same way each time. The second row (or rank) is filled with pawns. The rooks go in the corners, 
         then the knights next to them, followed by the bishops, and finally the queen, who always goes on her own
          matching color (white queen on white, black queen on black), and the king on the remaining square.</p>
          <p>Step 2. How The Chess Pieces Move. Each of the 6 different kinds of pieces moves differently. 
            Pieces cannot move through other pieces (though the knight can jump over other pieces), 
            and can never move onto a square with one of their own pieces. However, they can be moved to take the place of an opponent's piece which is then captured. Pieces are generally moved into positions where they can capture other pieces (by landing on their square and then replacing them),
            defend their own pieces in case of capture, or control important squares in the game.</p>
          <p>Step 3. Discover The Special Rules Of Chess
            There are a few special rules in chess that may not seem logical at first. They were created to make the game more fun and interesting.

            How To Promote A Pawn In Chess
            Pawns have another special ability and that is that if a pawn reaches the other side of the board it can become any other chess piece
            (called promotion) excluding a king (or pawn, for that matter).</p>
      </div>
      <div className="c4">
        <h1>Top Grand Master's(GM)</h1>
        <p>Magnus Carlsen2865 | #1 Norway
           GM Magnus Carlsen is the current world chess champion. To many people, he’s the best to ever play the game, although GMs Garry Kasparov and Bobby Fischer remain in the conversation. At any rate, the clear and remarkable point is that before turning 30 years old, Carlsen has already earned..</p>
        <p>Alireza Firouzja  2804 | #2 France
        Alireza Firouzja is an Iranian-born grandmaster living in France, a world-class player and the youngest player in the world rated over 2700. He is a two-time Iranian champion and the reigning European Fischer Random champion. As of March 1, 2021 Firouzja is the only teenager ranked in the top 15 (ranked...</p>
        <p>Anish Giri 2772 | #3 Netherlands
           GM Anish Giri is a four-time Dutch champion and a world-class player. He has been ranked as high as number
            three in the world and reached his peak rating of 2802 on February 15, 2015. Giri has represented the Netherlands at the Olympiads since 2010. He won the 2012 Reggio Emilia tournament and the 2017.</p>
      </div>

      </div>
    </div>
  );
}

export default App;
