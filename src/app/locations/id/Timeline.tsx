import styled from "@emotion/styled";
import { toZonedTime } from "date-fns-tz";
import { Link } from "react-router-dom";

import { stringifyDate } from "@/lib/utils";
import { type Checkin, getImageUrl } from "../lib/utils";

const List = styled.ul`
  list-style: none;
  margin: -6px 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: #eee;
  background-size: cover;
  background-position: center;
  transition: transform 0.2s;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Time = styled.time`
  font-size: 12px;
  color: #999;
  display: block;
`;

const Location = styled.div<{ ratio: number }>`
  font-size: 15px;
  padding-bottom: 4px;
  position: relative;

  --color: hsl(40, 60%, 50%);

  &::before {
    width: 100px;
    height: 1px;
    content: "";
    background: linear-gradient(90deg, var(--color), var(--color) ${({
      ratio,
    }) =>
      `${ratio * 100}%`}, #eee calc(${({ ratio }) => `${ratio * 100}%`} + 1px), #eee);
    display: block;
    position: absolute;
    bottom: 0;
  }
`;

const Anchor = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 6px 0;
  display: flex;
  gap: 16px;

  &:hover {
    .thumbnail {
      transform: translateX(-12px);
    }
  }
`;

interface TimelineProps {
  id: string;
  checkins: Checkin[];
}

const Timeline = ({ id, checkins }: TimelineProps) => {
  return (
    <nav>
      <List>
        {checkins.map((checkin, index) => {
          const thumbnail = checkin.photos[0]
            ? getImageUrl(id, checkin.photos[0].src)
            : undefined;
          return (
            <li key={index}>
              <Anchor to={`/locations/${id}?checkin=${checkin.id}`}>
                <Thumbnail
                  className="thumbnail"
                  style={{ backgroundImage: `url(${thumbnail})` }}
                />
                <Information>
                  <Time>
                    {stringifyDate(
                      toZonedTime(new Date(checkin.datetime), "Asia/Tokyo"),
                      false,
                    )}
                  </Time>
                  <Location ratio={(index + 1) / checkins.length}>
                    {checkin.location}
                  </Location>
                </Information>
              </Anchor>
            </li>
          );
        })}
      </List>
    </nav>
  );
};

export default Timeline;
