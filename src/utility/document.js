const MyDocument = ({ transcript }) => {
    const MAX_LINE_LENGTH = 50; // Maximum line length
    
    // Function to combine lines based on the maximum line length
    const combineLines = (lines) => {
      let combinedLines = [];
      let currentLine = '';
  
      lines.forEach((line) => {
        const words = line.transcript.split(' ');
  
        if (currentLine.length + words.join(' ').length <= MAX_LINE_LENGTH) {
          // Add the words to the current line if it doesn't exceed the maximum length
          currentLine += words.join(' ') + ' ';
        } else {
          // If the line exceeds the maximum length, add it to the combined lines array
          combinedLines.push(currentLine.trim());
          currentLine = words.join(' ') + ' ';
        }
      });
  
      // Add the last line to the combined lines array
      combinedLines.push(currentLine.trim());
  
      return combinedLines;
    };
  
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.heading}>Captions are provided by Seymour for <Text style={{ color: 'blue', textAlign: 'center', margin: 30, fontWeight:"bold" }}>Ricky's Event</Text> at <Text style={{ color: 'blue', textAlign: 'center', margin: 30, fontWeight:"bold" }}>Boston Bay</Text></Text>
            {/* Render transcript lines with speaker */}
            {transcript.map((line, index) => (
              <View key={index}>
                {/* Only render the speaker heading if it changes */}
                {index === 0 || line.speaker !== transcript[index - 1].speaker ? (
                  <Text style={styles.speaker}>{line.speaker}</Text>
                ) : null}
                {/* Render combined lines */}
                {combineLines([line]).map((combinedLine, index) => (
                  <Text key={index}>{combinedLine}</Text>
                ))}
              </View>
            ))}
          </View>
        </Page>
      </Document>
    );
  };
  