import styled from "styled-components";

export const SectionContainer = styled.div`
  margin: 40px 0;
  text-align: center;
  background-color: #0f2537;
  padding: 20px;
  border-radius: 8px;
`;

export const TwoColumnSection = styled(SectionContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 40px auto;
`;

export const Column = styled.div`
  flex: 1;
  padding: 20px;
`;

export const SectionImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

// export const SectionContent = styled.p`
//   font-size: 18px;
//   color: #fff;
//   max-width: 800px;
//   margin: 0 auto;
//   text-align: left;
// `;

export const SectionTitle = styled.h2`
  font-size: 28px;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
`;

export const CalendarContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
  border: 1px solid #000;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #ffffff;

  .rbc-calendar {
    background-color: transparent;
    color: #ffffff;
  }

  .rbc-toolbar {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .rbc-event {
    background-color: #1a73e8;
    border-radius: 5px;
    padding: 2px 5px;
    color: white;
  }

  .rbc-time-slot {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .rbc-time-content {
    border-top: 1px solid #444;
  }
`;
export const BottomText = styled.p`
  position: relative;
  bottom: 0;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  margin: 0;
  width: 100%;
  text-align: left !important;
  font-size: 18px;
  z-index: 1;
  border: 1px solid #000;
  border-radius: 15px;
`;
